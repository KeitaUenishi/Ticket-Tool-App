import React from "react";
import { Button } from "react-daisyui";
import { useQuery } from "@apollo/client";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { GET_EVENTS } from "@/queries/queries";

import { GetEventsQuery } from "@/types/generated/graphql";
import { Layout } from "@/components/layouts/Layout";

// ダッシュボード
export default function Home() {
  const { data } = useQuery<GetEventsQuery>(GET_EVENTS);
  const { events } = data || {};

  return (
    <Layout>
      <div className="mt-48 mb-48 pr-8 pl-8">
        <div className="mx-auto mb-24 flex justify-center">
          <h2 className="text-4xl">イベントリスト</h2>
        </div>
        <div className="flex justify-start mb-8">
          <Button color="info">行追加</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>開催日</th>
                <th>イベント名</th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event) => {
                return (
                  <tr key={event.id}>
                    <td>{event.event_date}</td>
                    <td>{event.event_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-8">
          <Button color="success">保存</Button>
        </div>
      </div>
    </Layout>
  );
}
