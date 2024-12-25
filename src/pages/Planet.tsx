import React from "react";
import GlobalStyles from "../Globaltyles";
import data from "../data.json";
import Icon from "/assets/icon-source.svg";
import {
  Wikipedia,
  About,
  PlanetName,
  PlanetPicture,
  Source,
  SourceContainer,
  Section,
  InfoTitle,
  Info,
  Container,
} from "../components/PlanetStyles";

const Planet: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <PlanetPicture src={data[0].images.planet} alt="Mercury" />
        <PlanetName>{data[0].name}</PlanetName>
        <About>{data[0].overview.content}</About>
        <SourceContainer>
          <Source>
            {" "}
            Source :
            <Wikipedia href={data[0].overview.source}> Wikipedia</Wikipedia>
          </Source>
          <img src={Icon} />
        </SourceContainer>
        <Section>
          <div>
            <InfoTitle>ROTATION TIME</InfoTitle>
            <Info>{data[0].rotation}</Info>
          </div>
          <div>
            <InfoTitle>REVOLUTION TIME</InfoTitle>
            <Info>{data[0].revolution}</Info>
          </div>
          <div>
            <InfoTitle>RADIUS</InfoTitle>
            <Info>{data[0].radius}</Info>
          </div>
          <div>
            <InfoTitle>AVERAGE TEMP.</InfoTitle>
            <Info>{data[0].temperature}</Info>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default Planet;
