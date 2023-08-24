import React from "react";

type Props = {
  children: React.ReactNode;
};

export const FormBackGround = ({ children }: Props) => {
  return (
    <div className="card shadow-xl bg-gray-600 max-w-full">{children}</div>
  );
};
