import React from "react";
import { Planet, PlanetMenuContainer } from "./TabletMenuStyles";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

const TabletMenu: React.FC = () => {
  const navigate = useNavigate();

  const [hoveredPlanet, setHoveredPlanet] = useState<string>("Mercury");

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

export default TabletMenu;
