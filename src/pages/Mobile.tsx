import React from "react";
import Planet from "./Planet";
import Menu from "../components/Menu";
import GlobalStyles from "../Globaltyles";

const Mobile: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  console.log(mobile);
  return (
    <>
      <GlobalStyles />
      {mobile ? <Menu /> : <Planet />}
    </>
  );
};

export default Mobile;
