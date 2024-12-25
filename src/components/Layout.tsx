import React from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "/images/icon-hamburger.svg";
import { Header, Title, Menu } from "./LayoutStyles";

const Layout: React.FC = () => {
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

export default Layout;
