import React, { useState } from "react";
import { Button, Link } from "react-daisyui";
import { useQuery } from "@apollo/client";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { GET_EVENTS } from "@/queries/queries";

import { GetEventsQuery } from "@/types/generated/graphql";
import { Event } from "@/types/events";
import { Layout } from "@/components/layouts/Layout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event) => {
                return (
                  <tr key={event.id}>
                    <td>{event.event_date}</td>
                    <td>{event.event_name}</td>
                    <td>
                      <div className="flex justify-center">
                        <Button
                          color="accent"
                          onClick={() => {
                            handleEdit(event.id);
                          }}
                        >
                          詳細
                        </Button>
                      </div>
                    </td>
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
