import React from "react";

type Props = {
  name: string;
  count: number;
  email: string;
};

export const CustomerCard = ({ name, count, email }: Props) => {
  return (
    <div className="card shadow-xl bg-gray-100 max-w-full">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="mr-16 text-2xl font-bold">{name}</h2>
          <p className="mb-2">取り置き枚数: {count}</p>
        </div>
        <p className="mb-2">{email}</p>
      </div>
    </div>
  );
};
