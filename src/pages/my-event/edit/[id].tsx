import { Layout } from "@/components/page/layouts/Layout";
import { CustomerCard } from "@/components/ui/Card/CustomerCard";
import { AddEventForm } from "@/components/ui/Form/AddEventForm";
import React from "react";

const MyEventEdit = () => {
  // TODO: 選択データの取得
  return (
    <Layout>
      <div className="mt-48 mb-48 w-full">
        <h3 className="text-2xl mb-8">イベントを編集する</h3>
        <AddEventForm />
        <div className="mt-16">
          <h3 className="text-2xl mb-8">取り置きリスト</h3>
          <h3 className="text-xl mb-8">合計予約数: {dummyData.length}</h3>
          {dummyData.map((data, index) => {
            return (
              <div className="mt-8" key={index}>
                <CustomerCard
                  name={data.name}
                  count={data.count}
                  email={data.email}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

const dummyData = [
  {
    name: "〇〇太郎",
    count: 2,
    email: "aaaaa@example.com",
  },
  {
    name: "〇〇太郎",
    count: 2,
    email: "aaaaa@example.com",
  },
  {
    name: "〇〇太郎",
    count: 2,
    email: "aaaaa@example.com",
  },
  {
    name: "〇〇太郎",
    count: 2,
    email: "aaaaa@example.com",
  },
  {
    name: "〇〇太郎",
    count: 2,
    email: "aaaaa@example.com",
  },
  {
    name: "〇〇太郎",
    count: 2,
    email: "aaaaa@example.com",
  },
];

export default MyEventEdit;
