import React from "react";
import { Button } from "react-daisyui";

export const TweetAndLink = () => {
  return (
    <>
      <Button
        className="w-4/12 border-solid border-gray-300 border"
        onClick={() => alert("ツイートしました。")}
        color="ghost"
      >
        ツイート
      </Button>
      <Button
        className="w-4/12 border-solid border-gray-300 border"
        onClick={() => alert("URLをコピーしました。")}
        color="ghost"
      >
        URLをコピー
      </Button>
    </>
  );
};
