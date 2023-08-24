import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_ALL_EVENTS } from "@/queries/queries";
import { GetAllEventsQuery } from "@/types/generated/graphql";
import { EventIndex } from "@/components/page/Events";

// ダッシュボード
export default function Home() {
  const router = useRouter();

  // TODO: パラメーター仮置き
  const { data } = useQuery<GetAllEventsQuery>(GET_ALL_EVENTS, {
    variables: { event_date: "2023-04-01" },
  });

  const handleEdit = (editEventKey: string) => {
    router.push(`/detail/${editEventKey}`);
  };

  return (
    <EventIndex title="イベント一覧" data={data} handleEvent={handleEdit} />
  );
}
