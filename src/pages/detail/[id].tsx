import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const { id } = useRouter().query;
  return <div>detail {id}</div>;
};

export default Index;
