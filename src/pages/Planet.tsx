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
  GeologyPicture,
} from "../components/PlanetStyles";

import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Planet: React.FC<{ filter: string }> = ({ filter }) => {
  const { name } = useParams();

  const planet = data.find((d) => d.name === name);
  console.log(planet);

  return (
    <>
      <Container>
        <PlanetPicture
          src={
            filter === "OVERVIEW" || filter === "SURFACE"
              ? planet?.images.planet
              : planet?.images.internal
          }
          alt="Mercury"
        />
        {filter === "SURFACE" ? (
          <GeologyPicture src={planet?.images.geology} />
        ) : null}

        <PlanetName>{planet?.name}</PlanetName>
        <About>
          {filter === "OVERVIEW"
            ? planet?.overview.content
            : filter === "STRUCTURE"
            ? planet?.structure.content
            : filter === "SURFACE"
            ? planet?.geology.content
            : null}
        </About>
        <SourceContainer>
          <Source>
            {" "}
            Source :
            <Wikipedia
              href={
                filter === "OVERVIEW"
                  ? planet?.overview.source
                  : filter === "STRUCTURE"
                  ? planet?.structure.source
                  : filter === "SURFACE"
                  ? planet?.geology.source
                  : ""
              }
            >
              {" "}
              Wikipedia
            </Wikipedia>
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
