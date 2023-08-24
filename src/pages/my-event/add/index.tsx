import { Layout } from "@/components/page/layouts/Layout";
import { AddEventForm } from "@/components/ui/Form/AddEventForm";
import React from "react";

const MyEventAdd = () => {
  return (
    <Layout>
      <div className="mt-48 mb-48 w-full">
        <h3 className="text-2xl mb-8">イベントを追加する</h3>
        <AddEventForm />
      </div>
    </Layout>
  );
};

export default MyEventAdd;
