import React from "react";
import { useRouter } from "next/router";

import { Layout } from "@/components/layouts/Layout";
import { EventForm } from "@/components/ui-elements/form/form";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "@/queries/queries";
import {
  CreateEventMutation,
  CreateEventMutationVariables,
} from "@/types/generated/graphql";

export const Index = () => {
  const router = useRouter();
  const [insert_event_one] = useMutation<CreateEventMutation>(CREATE_EVENT);
  const onSubmit = async (data: CreateEventMutationVariables) => {
    try {
      await insert_event_one({
        variables: {
          event_name: data.event_name,
          event_date: data.event_date,
          event_type_id: Number(data.event_type_id),
        },
      });

      router.push("/");
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <Layout>
      <EventForm onSubmit={onSubmit} buttonText="登録" />
    </Layout>
  );
};

export default Index;
