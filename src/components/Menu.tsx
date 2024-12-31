import React from "react";
import IconArrow from "/assets/icon-chevron.svg";
import {
  EachPlanetContainer,
  SubContainer,
  RoundColor,
  Arrow,
  EachPlanet,
  Navbar,
} from "./MenuStyles";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

const Menu: React.FC<{
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ mobile, setMobile }) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[0].name}`);
            setMobile(!mobile);
          }}
          style={{ paddingTop: 0, marginTop: "4.4rem" }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#def4fc" }}></RoundColor>
            <EachPlanet>MERCURY</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[1].name}`);
            setMobile(!mobile);
          }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#f7cc7f" }}></RoundColor>
            <EachPlanet>VENUS</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[2].name}`);
            setMobile(!mobile);
          }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#545bfe" }}></RoundColor>
            <EachPlanet>EARTH</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[3].name}`);
            setMobile(!mobile);
          }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#ff6a45" }}></RoundColor>
            <EachPlanet>MARS</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[4].name}`);
            setMobile(!mobile);
          }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#ecad7a" }}></RoundColor>
            <EachPlanet>JUPITER</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[5].name}`);
            setMobile(!mobile);
          }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#fccb6b" }}></RoundColor>
            <EachPlanet>SATURN</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[6].name}`);
            setMobile(!mobile);
          }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#65f0d5" }}></RoundColor>
            <EachPlanet>URANUS</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer
          onClick={() => {
            navigate(`./${data[7].name}`);
            setMobile(!mobile);
          }}
          className="withAfter"
          style={{ paddingBottom: "0" }}
        >
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#497efa" }}></RoundColor>
            <EachPlanet>NEPTUNE</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
      </Navbar>
    </>
  );
};

export default Menu;
