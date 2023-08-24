import React from "react";
import Image from "next/image";
import { Layout } from "@/components/page/layouts/Layout";
import { DetailCard } from "@/components/ui/Card/DetailCard";
import { TweetAndLink } from "@/components/ui/Button/TweetAndLink";
import { Button } from "react-daisyui";

const ReservationEventDetail = () => {
  // TODO: 選択データの取得
  return (
    <Layout>
      <div className="mt-48 mb-48 w-full">
        <DetailCard
          title={"タイトル"}
          actors={"出演者"}
          date={"2021-10-10"}
          place={"場所"}
          freeInput={"フリー入力"}
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
        <div className="mt-16">
          <Button
            className="w-4/12 border-solid border-gray-300 border"
            onClick={() => alert("キャンセルしました。")}
            color="ghost"
          >
            キャンセルする
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationEventDetail;
