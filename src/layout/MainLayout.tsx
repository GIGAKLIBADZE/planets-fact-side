import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "/assets/icon-hamburger.svg";
import { Header, Title, Burger } from "../components/MainLayoutStyles";
import { useState } from "react";
import Planet from "../pages/Planet";
import Menu from "../components/Menu";
import GlobalStyles from "../Globaltyles";
import data from "../data.json";
import TabletMenu from "../components/TabletMenu";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useMediaQuery } from "@mui/material";

const MainLayout: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const tablet = useMediaQuery("(min-width: 768px)");
  console.log(tablet);

  return (
    <>
      <GlobalStyles />
      <Header>
        <Title>THE PLANETS</Title>

        {tablet ? (
          <TabletMenu />
        ) : (
          // <p>Hello</p>
          <Burger
            src={Hamburger}
            alt="Hamburger"
            onClick={() => setMobile(!mobile)}
          />
        )}
      </Header>
      {mobile ? <Menu mobile={mobile} setMobile={setMobile} /> : <Outlet />}
    </>
  );
};

export default MainLayout;
