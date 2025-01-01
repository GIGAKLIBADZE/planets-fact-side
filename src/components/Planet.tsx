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
  PlanetSection,
  InfoTitle,
  Info,
  Container,
  GeologyPicture,
  TabletPlanetAndFilterContainer,
  TabletPlanetContainer,
  MainContainer,
} from "./PlanetStyles";

import { useParams } from "react-router-dom";

import TabletFilter from "./ResponsiveFilter";

const Planet: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  media: boolean;
}> = ({ filter, setFilter, media }) => {
  const { name } = useParams();

  const planet = data.find((d) => d.name === name);

  return (
    <>
      <Container>
        <MainContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
          </div>
          <TabletPlanetAndFilterContainer>
            <TabletPlanetContainer>
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
                <img src={IconSource} style={{ marginLeft: "0.2rem" }} />
              </SourceContainer>
            </TabletPlanetContainer>

            {media ? (
              <TabletFilter filter={filter} setFilter={setFilter} />
            ) : null}
          </TabletPlanetAndFilterContainer>
        </MainContainer>
        <PlanetSection>
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
        </PlanetSection>
      </Container>
    </>
  );
};

export default Planet;
