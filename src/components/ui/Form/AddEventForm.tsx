import React from "react";
import { Button } from "react-daisyui";
import { FormBackGround } from "./FormBackGround";

export const AddEventForm = () => {
  // TODO: hook form
  // TODO: inputもコンポーネント化する
  return (
    <FormBackGround>
      <div className="card-body">
        <form className="w-full max-w-lg">
          <div className="mb-8 mt-8">
            <label className="font-medium">イベント</label>
            <input className="border-solid border py-2 px-4 w-full rounded" />
          </div>
          <div className="mb-8 mt-8">
            <label className="font-medium">名前</label>
            <input className="border-solid border py-2 px-4 w-full rounded" />
          </div>
          <div className="mb-8 mt-8">
            <label className="font-medium">日程</label>
            <input
              className="border-solid border py-2 px-4 w-full rounded"
              type="date"
            />
          </div>
          <div className="mb-8">
            <label className="font-medium">詳細（出演者等）</label>
            <input
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
              type="text"
            />
          </div>
          <div className="mb-8">
            <label className="font-medium">自由入力項目</label>
            <input
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
              type="textarea"
            />
          </div>
          <div className="mb-8">
            <label className="font-medium">画像アップロード</label>
            <input className="py-2 px-4 w-full rounded" type="file" />
          </div>
          <div className="mb-8 flex justify-between">
            <Button
              type="button"
              color="accent"
              onClick={() => alert("入力完了")}
            >
              送信
            </Button>
          </div>
        </form>
      </div>
    </FormBackGround>
  );
};
