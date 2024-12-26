import React from "react";
import IconArrow from "/assets/icon-chevron.svg";
import {
  EachPlanetContainer,
  SubContainer,
  RoundColor,
  Arrow,
  EachPlanet,
} from "./MenuStyles";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <nav>
        <EachPlanetContainer onClick={() => <Link to="/:Mercury" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#def4fc" }}></RoundColor>
            <EachPlanet>MERCURY</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Venus" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#f7cc7f" }}></RoundColor>
            <EachPlanet>VENUS</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Earth" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#545bfe" }}></RoundColor>
            <EachPlanet>EARTH</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Mars" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#ff6a45" }}></RoundColor>
            <EachPlanet>MARS</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Jupiter" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#ecad7a" }}></RoundColor>
            <EachPlanet>JUPITER</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Saturn" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#fccb6b" }}></RoundColor>
            <EachPlanet>SATURN</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Uranes" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#65f0d5" }}></RoundColor>
            <EachPlanet>URANUS</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
        <EachPlanetContainer onClick={() => <Link to="/:Neptune" />}>
          <SubContainer>
            <RoundColor style={{ backgroundColor: "#497efa" }}></RoundColor>
            <EachPlanet>NEPTUNE</EachPlanet>
          </SubContainer>
          <Arrow src={IconArrow} />
        </EachPlanetContainer>
      </nav>
    </>
  );
};

export default Menu;
