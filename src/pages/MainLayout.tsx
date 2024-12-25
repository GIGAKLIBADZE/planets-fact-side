import React from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "/assets/icon-hamburger.svg";
import { Header, Title, Menu } from "../components/MainLayoutStyles";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header>
        <Title>THE PLANETS</Title>
        <Menu src={Hamburger} alt="Hamburger" />
      </Header>
      <Outlet />
    </>
  );
};

export default MainLayout;
