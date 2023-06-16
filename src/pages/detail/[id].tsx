import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Button } from "react-daisyui";
import { useRouter } from "next/router";

import { Layout } from "@/components/layouts/Layout";
import { EventForm } from "@/components/ui-elements/form/form";

import { useMutation, useQuery } from "@apollo/client";
import { GET_EVENT, UPDATE_EVENT, DELETE_EVENT } from "@/queries/queries";

import {
  DeleteEventMutation,
  GetEventQuery,
  UpdateEventMutation,
} from "@/types/generated/graphql";
import { userState } from "@/store/user";
import { changeDateToDisplay } from "@/util/dateTime";

const Index = () => {
  const router = useRouter();
  const { id } = useRouter().query;
  const userId = useRecoilValue(userState);
  const { data } = useQuery<GetEventQuery>(GET_EVENT, {
    fetchPolicy: "cache-and-network",
    variables: { userId: userId, id: id },
  });
  const [updateEvent] = useMutation<UpdateEventMutation>(UPDATE_EVENT);
  const [deleteEvent] = useMutation<DeleteEventMutation>(DELETE_EVENT);

  const [isEdit, setIsEdit] = useState(false);
  const event = data?.events[0];

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleEditInput = (data: any) => {
    try {
      updateEvent({
        variables: {
          id: data.id,
          event_name: data.event_name,
          place_name: data.place_name,
          event_date: data.event_date,
          event_type_id: Number(data.event_type_id),
          updated_date: new Date().toISOString(),
        },
      });
      alert("更新しました。");
    } catch {
      alert("更新に失敗しました。");
    }
    setIsEdit(false);
  };

  const handleDelete = () => {
    if (!confirm("本当に削除しますか？")) return;

    try {
      deleteEvent({
        variables: {
          id: event?.id,
        },
      });
      alert("削除しました。");
      router.push("/");
    } catch {
      alert("削除に失敗しました。");
    }
  };

  return (
    <Layout>
      {isEdit ? (
        <EventForm onSubmit={handleEditInput} buttonText="更新" data={event} />
      ) : (
        <>
          <div className="mt-48 mb-48 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-100">開催日</div>
              <div className="text-gray-100">{event?.event_date}</div>
              <div className="text-gray-100">イベント名</div>
              <div className="text-gray-100">{event?.event_name}</div>
              <div className="text-gray-100">場所</div>
              <div className="text-gray-100">{event?.place_name}</div>
              <div className="text-gray-100">イベント種別</div>
              <div className="text-gray-100">{event?.event_type_id}</div>
              <div className="text-gray-100">登録日</div>
              <div className="text-gray-100">
                {changeDateToDisplay(event?.created_date)}
              </div>
              <div className="text-gray-100">更新日</div>
              <div className="text-gray-100">
                {changeDateToDisplay(event?.updated_date)}
              </div>
            </div>
            <div className="flex justify-between mt-8 mb-8">
              <div>
                <Button onClick={() => router.back()} color="accent">
                  戻る
                </Button>
              </div>
              <div>
                <span className="mr-4">
                  <Button onClick={() => handleDelete()} color="error">
                    削除
                  </Button>
                </span>
                <span>
                  <Button onClick={() => handleEdit()} color="success">
                    編集
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Index;
