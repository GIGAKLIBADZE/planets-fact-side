import React from "react";
import { Planet, PlanetMenuContainer } from "./TabletMenuStyles";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

const TabletMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PlanetMenuContainer>
        <Planet onClick={() => navigate(`./${data[0].name}`)}>MERCURY</Planet>
        <Planet onClick={() => navigate(`./${data[1].name}`)}>VENUS</Planet>
        <Planet onClick={() => navigate(`./${data[2].name}`)}>EARTH</Planet>
        <Planet onClick={() => navigate(`./${data[3].name}`)}>MARS</Planet>
        <Planet onClick={() => navigate(`./${data[4].name}`)}>JUPITER</Planet>
        <Planet onClick={() => navigate(`./${data[5].name}`)}>SATURN</Planet>
        <Planet onClick={() => navigate(`./${data[6].name}`)}>URANUS</Planet>
        <Planet onClick={() => navigate(`./${data[7].name}`)}>NEPTUNE</Planet>
      </PlanetMenuContainer>
    </>
  );
};

export default TabletMenu;
