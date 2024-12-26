import React from "react";
import data from "../data.json";
import IconSource from "/assets/icon-source.svg";
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

import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Planet: React.FC = () => {
  const { name } = useParams();

  const planet = data.find((d) => d.name === name);
  console.log(planet);

  return (
    <>
      <Container>
        <PlanetPicture src={planet?.images.planet} alt="Mercury" />
        <PlanetName>{planet?.name}</PlanetName>
        <About>{planet?.overview.content}</About>
        <SourceContainer>
          <Source>
            {" "}
            Source :
            <Wikipedia href={planet?.overview.source}> Wikipedia</Wikipedia>
          </Source>
          <img src={IconSource} />
        </SourceContainer>
        <Section>
          <div>
            <InfoTitle>ROTATION TIME</InfoTitle>
            <Info>{planet?.rotation}</Info>
          </div>
          <div>
            <InfoTitle>REVOLUTION TIME</InfoTitle>
            <Info>{planet?.revolution}</Info>
          </div>
          <div>
            <InfoTitle>RADIUS</InfoTitle>
            <Info>{planet?.radius}</Info>
          </div>
          <div>
            <InfoTitle>AVERAGE TEMP.</InfoTitle>
            <Info>{planet?.temperature}</Info>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default Planet;
