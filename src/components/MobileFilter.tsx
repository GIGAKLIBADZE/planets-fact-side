import React from "react";
import { Container, Text } from "./MobileFilterStyles";
import { useParams } from "react-router-dom";
import data from "../data.json";

const MobileFilter: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filter, setFilter }) => {
  const { name } = useParams();

  const planet = data.find((d) => d.name === name);
  const planetName = planet?.name;

  return (
    <>
      <Container>
        <Text
          planetName={planetName}
          onClick={() => setFilter("OVERVIEW")}
          className={filter === "OVERVIEW" ? "textAfter" : ""}
        >
          OVERVIEW
        </Text>
        <Text
          planetName={planetName}
          onClick={() => setFilter("STRUCTURE")}
          className={filter === "STRUCTURE" ? "textAfter" : ""}
        >
          STRUCTURE
        </Text>
        <Text
          planetName={planetName}
          onClick={() => setFilter("SURFACE")}
          className={filter === "SURFACE" ? "textAfter" : ""}
        >
          SURFCACE
        </Text>
      </Container>
    </>
  );
};

export default MobileFilter;
