import React from "react";
import { Button, Link } from "react-daisyui";
import { useQuery } from "@apollo/client";

import { GET_EVENTS } from "@/queries/queries";

import { GetEventsQuery } from "@/types/generated/graphql";
import { Layout } from "@/components/layouts/Layout";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// ダッシュボード
export default function Home() {
  const router = useRouter();
  const { data } = useQuery<GetEventsQuery>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
  });

  const { events } = data || {};

  const handleEdit = (editEventKey: string) => {
    router.push(`/detail/${editEventKey}`);
  };

  return (
    <Layout>
      <div className="mt-48 mb-48 w-full">
        <div className="mx-auto mb-24 flex justify-center">
          <h2 className="text-4xl">イベントリスト</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>開催日</th>
                <th>イベント名</th>
                <th>場所</th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event) => {
                return (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-600 transition-all duration-500 ease-out cursor-pointer"
                    onClick={() => handleEdit(event.id)}
                  >
                    <td className="bg-transparent">{event.event_date}</td>
                    <td className="bg-transparent">{event.event_name}</td>
                    <td className="bg-transparent">{event.place_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-8">
          <Link href="/register">
            <Button color="success">新規登録</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
