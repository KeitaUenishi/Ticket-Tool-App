import React from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_MY_EVENTS } from "@/queries/queries";
import { userState } from "@/store/user";
import { GetMyEventsQuery } from "@/types/generated/graphql";
import { EventIndex } from "@/components/page/Events";

const ReservationEvent = () => {
  const router = useRouter();
  const userId = useRecoilValue(userState);

  const { data } = useQuery<GetMyEventsQuery>(GET_MY_EVENTS, {
    variables: { user_id: userId },
  });

  const handleEdit = (editEventKey: string) => {
    router.push(`/reservation-event/detail/${editEventKey}`);
  };

  return (
    <EventIndex title="予約イベント一覧" data={data} handleEvent={handleEdit} />
  );
};

export default ReservationEvent;
