import React from "react";
import { Layout } from "@/components/page/layouts/Layout";
import { GetEventQuery } from "@/types/generated/graphql";
import { TitleCard } from "@/components/ui/Card/TitleCard";

type Props = {
  title: string;
  data: GetEventQuery | undefined;
  handleEvent: (eventKey: string) => void;
};

export const EventIndex = ({ title, data, handleEvent }: Props) => {
  const { events } = data || {};
  return (
    <Layout>
      <div className="mt-48 mb-48 w-full">
        <div className="mx-auto mb-24 flex justify-center">
          <h2 className="text-4xl">{title}</h2>
        </div>
        <div className="overflow-x-auto">
          {events?.map((event) => {
            return (
              <div key={event.id} className="mb-8">
                <TitleCard
                  title={event.event_title}
                  actors={event.actors || ""}
                  date={event.event_date}
                  place={event.event_place || ""}
                  onClick={() => handleEvent(event.id)}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mt-8"></div>
      </div>
    </Layout>
  );
};
