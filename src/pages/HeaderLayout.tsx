import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Text, TextPaddle } from "../components/HeaderLayoutStyles";

const HeaderLayout: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filter, setFilter }) => {
  return (
    <>
      <Container>
        <Text
          onClick={() => setFilter("OVERVIEW")}
          className={filter === "OVERVIEW" ? "textAfter" : ""}
        >
          OVERVIEW
        </Text>
        <Text
          onClick={() => setFilter("STRUCTURE")}
          className={filter === "STRUCTURE" ? "textAfter" : ""}
        >
          STRUCTURE
        </Text>
        <Text
          onClick={() => setFilter("SURFACE")}
          className={filter === "SURFACE" ? "textAfter" : ""}
        >
          SURFCACE
        </Text>
      </Container>
    </>
  );
};

export default HeaderLayout;
