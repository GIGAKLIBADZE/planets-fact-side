import React from "react";
import HeaderLayout from "../components/MobileFilter";
import Planet from "../components/Planet";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const PlanetResult: React.FC = () => {
  const [filter, setFilter] = useState<string>("OVERVIEW");
  const media = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {media ? null : <HeaderLayout filter={filter} setFilter={setFilter} />}
      <Planet filter={filter} setFilter={setFilter} media={media} />
    </>
  );
};

export default PlanetResult;
