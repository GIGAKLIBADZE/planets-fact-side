import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Text, TextPaddle } from "../components/HeaderLayoutStyles";
import { useParams } from "react-router-dom";
import data from "../data.json";

const HeaderLayout: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filter, setFilter }) => {
  const { name } = useParams();

  const planet = data.find((d) => d.name === name);
  const planetName = planet?.name;
  console.log(planetName);

  return (
    <>
      <Container>
        <Text
          planetName={planetName}
          // $filter={filter}
          onClick={() => setFilter("OVERVIEW")}
          // className={filter === "OVERVIEW" ? "textAfter" : ""}
          // style={{ color: planet?.name === "MERCURY" ? "red" : "white" }}
        >
          OVERVIEW
        </Text>
        <Text
          planetName={planetName}
          // $filter={filter}
          onClick={() => setFilter("STRUCTURE")}
          // className={filter === "STRUCTURE" ? "textAfter" : ""}
        >
          STRUCTURE
        </Text>
        <Text
          planetName={planetName}
          // $filter={filter}
          onClick={() => setFilter("SURFACE")}
          // className={filter === "SURFACE" ? "textAfter" : ""}
        >
          SURFCACE
        </Text>
      </Container>
    </>
  );
};

export default HeaderLayout;
