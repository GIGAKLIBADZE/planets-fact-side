import React from "react";
import HeaderLayout from "../pages/HeaderLayout";
import Planet from "../pages/Planet";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import TabletFilter from "./TabletFilter";

const Parent: React.FC = () => {
  const [filter, setFilter] = useState<string>("OVERVIEW");
  const media = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {media ? null : <HeaderLayout filter={filter} setFilter={setFilter} />}
      <Planet filter={filter} setFilter={setFilter} media={media} />
    </>
  );
};

export default Parent;
