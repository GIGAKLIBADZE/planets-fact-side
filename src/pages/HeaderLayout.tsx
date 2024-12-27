import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Text } from "../components/HeaderLayoutStyles";

const HeaderLayout: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filter, setFilter }) => {
  return (
    <>
      <Container>
        <Text onClick={() => setFilter("OVERVIEW")}>OVERVIEW</Text>
        <Text onClick={() => setFilter("STRUCTURE")}>STRUCTURE</Text>
        <Text onClick={() => setFilter("SURFACE")}>SURFCACE</Text>
      </Container>
    </>
  );
};

export default HeaderLayout;
