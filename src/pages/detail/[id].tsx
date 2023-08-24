import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Button } from "react-daisyui";
import { useRouter } from "next/router";
import Image from "next/image";

import { Layout } from "@/components/page/layouts/Layout";
import { EventForm } from "@/components/ui/Form/form";

import { useMutation, useQuery } from "@apollo/client";
import { GET_EVENT, UPDATE_EVENT, DELETE_EVENT } from "@/queries/queries";

import {
  DeleteEventMutation,
  GetEventQuery,
  UpdateEventMutation,
} from "@/types/generated/graphql";
import { userState } from "@/store/user";
import { changeDateToDisplay } from "@/util/dateTime";
import { DetailCard } from "@/components/ui/Card/DetailCard";
import { TweetAndLink } from "@/components/ui/Button/TweetAndLink";
import { ReserveForm } from "@/components/ui/Form/ReserveForm";

const Index = () => {
  const router = useRouter();
  const { id } = useRouter().query;
  const userId = useRecoilValue(userState);
  const { data } = useQuery<GetEventQuery>(GET_EVENT, {
    fetchPolicy: "cache-and-network",
    variables: { user_id: userId, id: id },
  });
  const [updateEvent] = useMutation<UpdateEventMutation>(UPDATE_EVENT);
  const [deleteEvent] = useMutation<DeleteEventMutation>(DELETE_EVENT);

  const [isEdit, setIsEdit] = useState(false);
  const event = data?.events[0];

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  const handleEditInput = (data: any) => {
    try {
      // TODO: ここの型がなぜanyになるか
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
      <div className="mt-48 mb-48 w-full">
        <DetailCard
          title={event?.event_title || ""}
          actors={event?.actors || ""}
          date={event?.event_date || ""}
          place={event?.event_place || ""}
          freeInput={event?.free_input || ""}
        />
        <div className="mt-8 mb-8">
          <Image
            width={1080}
            height={720}
            src="/test_event_image.png"
            alt="event_image"
          />
        </div>
        <div className="flex justify-around mt-8">
          <TweetAndLink />
        </div>
        <div className="mt-16 mb-8">
          <h3 className="text-2xl mb-8">取り置きする</h3>
          <ReserveForm />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
