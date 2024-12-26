import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Text } from "../components/HeaderLayoutStyles";

const HeaderLayout: React.FC = () => {
  return (
    <>
      <Container>
        <Text>OVERVIEW</Text>
        <Text>STRUCTURE</Text>
        <Text>SURFCACE</Text>
      </Container>
    </>
  );
};

export default HeaderLayout;
