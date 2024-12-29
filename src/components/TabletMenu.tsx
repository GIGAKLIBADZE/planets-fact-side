import React from "react";
import { Planet, PlanetMenuContainer, Title } from "./TabletMenuStyles";

const TabletMenu: React.FC = () => {
  return (
    <>
      {/* <Title>THE PLANETS</Title> */}
      <PlanetMenuContainer>
        <Planet>MERCURY</Planet>
        <Planet>vENUS</Planet>
        <Planet>EARTH</Planet>
        <Planet>MARS</Planet>
        <Planet>JUPITER</Planet>
        <Planet>SATURN</Planet>
        <Planet>URANUS</Planet>
        <Planet>NEPTUNE</Planet>
      </PlanetMenuContainer>
    </>
  );
};

export default TabletMenu;
