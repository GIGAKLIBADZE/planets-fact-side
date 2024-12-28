import React from "react";
import Main

const Header: React.FC<{
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setMobile }) => {
  return (
    <>
      <Header>
        <Title>THE PLANETS</Title>
        <Burger
          src={Hamburger}
          alt="Hamburger"
          onClick={() => setMobile(!mobile)}
        />
      </Header>
    </>
  );
};

export default Header;
