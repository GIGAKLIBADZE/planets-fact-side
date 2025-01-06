import React from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "/assets/icon-hamburger.svg";
import { Header, Title, Burger } from "../components/LayoutStyles";
import { useState } from "react";
import Menu from "../components/Menu";
import GlobalStyles from "../Globaltyles";
import TabletMenu from "../components/ResponsiveMenu";
import { useMediaQuery } from "@mui/material";

const Layout: React.FC = () => {
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

export default Layout;
