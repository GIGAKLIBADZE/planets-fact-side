import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "/assets/icon-hamburger.svg";
import { Header, Title, Burger } from "../components/MainLayoutStyles";
import { useState } from "react";
import Planet from "../pages/Planet";
import Menu from "../components/Menu";
import GlobalStyles from "../Globaltyles";
import data from "../data.json";
import HeaderLayout from "../pages/HeaderLayout";

const MainLayout: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Header>
        <Title>THE PLANETS</Title>
        <Burger
          src={Hamburger}
          alt="Hamburger"
          onClick={() => setMobile(!mobile)}
        />
      </Header>
      {mobile ? "" : <HeaderLayout />}
      {mobile ? <Menu mobile={mobile} setMobile={setMobile} /> : <Outlet />}
    </>
  );
};

export default MainLayout;
