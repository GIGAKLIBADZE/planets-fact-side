import React from "react";
import { Planet, PlanetMenuContainer } from "./ResponsiveMenuStyles";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

const ResponsiveMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <PlanetMenuContainer>
        <Planet
          onClick={() => navigate(`./${data[0].name}`)}
          className="hoveredMercury"
        >
          MERCURY
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[1].name}`)}
          className="hoveredVenus"
        >
          VENUS
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[2].name}`)}
          className="hoveredEarth"
        >
          EARTH
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[3].name}`)}
          className="hoveredMars"
        >
          MARS
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[4].name}`)}
          className="hoveredJupiter"
        >
          JUPITER
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[5].name}`)}
          className="hoveredSaturn"
        >
          SATURN
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[6].name}`)}
          className="hoveredUranus"
        >
          URANUS
        </Planet>
        <Planet
          onClick={() => navigate(`./${data[7].name}`)}
          className="hoveredNeptune"
        >
          NEPTUNE
        </Planet>
      </PlanetMenuContainer>
    </>
  );
};

export default ResponsiveMenu;
