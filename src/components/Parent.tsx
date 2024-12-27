import React from "react";
import HeaderLayout from "../pages/HeaderLayout";
import Planet from "../pages/Planet";
import { useState } from "react";

const Parent: React.FC = () => {
  const [filter, setFilter] = useState<string>("OVERVIEW");
  return (
    <>
      <HeaderLayout filter={filter} setFilter={setFilter} />
      <Planet filter={filter} />
    </>
  );
};

export default Parent;
