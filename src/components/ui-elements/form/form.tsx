import React from "react";
import { Button } from "react-daisyui";
import { useForm } from "react-hook-form";

type Props = {
  onSubmit: (data: any) => void;
  buttonText: string;
  data?: any;
};

export const EventForm = ({ onSubmit, buttonText, data }: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { ...data } ?? {},
  });

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 mt-8">
        <label className="font-medium">イベント名</label>
        <input
          className="border-solid border py-2 px-4 w-full rounded"
          {...register("event_name")}
        />
      </div>
      <div className="mb-8 mt-8">
        <label className="font-medium">場所</label>
        <input
          className="border-solid border py-2 px-4 w-full rounded"
          {...register("place_name")}
        />
      </div>
      <div className="mb-8">
        <label className="font-medium">開催日</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
          type="date"
          {...register("event_date")}
        />
      </div>
      <div className="mb-8">
        <label className="font-medium">イベントタイプ</label>
        <select
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
          {...register("event_type_id")}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="mb-8 flex justify-end">
        <Button type="button" color="success">
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
