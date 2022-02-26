import { useRouter } from "next/router";
import React from "react";

const item = () => {
  const { itemID } = useRouter().query;
  return <div>{itemID}</div>;
};

export default item;
