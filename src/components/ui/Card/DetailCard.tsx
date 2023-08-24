import React from "react";

type Props = {
  title: string;
  actors: string;
  date?: string;
  place?: string;
  freeInput?: string;
  author?: ChildNode;
};

export const DetailCard = ({
  title,
  actors,
  date,
  place,
  freeInput,
  author,
}: Props) => {
  return (
    <div className="card shadow-xl bg-gray-100 max-w-full">
      <div className="card-body">
        <h2 className="mb-16">{title}</h2>
        <p className="mb-8">{actors}</p>
        <p className="mb-8">{date}</p>
        <p className="mb-8">{place}</p>
        <p className="mb-8">{freeInput}</p>
      </div>
    </div>
  );
};
