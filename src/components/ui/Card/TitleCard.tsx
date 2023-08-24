import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  actors: string;
  date?: string;
  place?: string;
  onClick: () => void;
  author?: ChildNode;
};

export const TitleCard = ({
  title,
  actors,
  date,
  place,
  onClick,
  author,
}: Props) => {
  return (
    <div
      className="card shadow-xl bg-gray-100 max-w-full hover:opacity-80 transition-all duration-500 ease-out cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{actors}</p>
        <p>{date}</p>
        <p>{place}</p>
        <div className="card-actions">
          <Image
            className="w-10 h-10 rounded-full"
            width={20}
            height={20}
            src="/avatar.jpg"
            alt="avatar"
          />
          <p>投稿者</p>
        </div>
      </div>
    </div>
  );
};
