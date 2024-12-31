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
  TabletPlanetAndFilterContainer,
  TabletPlanetContainer,
  MainContainer,
} from "../components/PlanetStyles";
import { useState } from "react";
import TabletFilter from "../components/ResponsiveFilter";
import { useMediaQuery } from "@mui/material";

const Mercury: React.FC = () => {
  const [filter, setFilter] = useState<string>("OVERVIEW");
  const media = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Container>
        <MainContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PlanetPicture
              src={
                filter === "OVERVIEW" || filter === "SURFACE"
                  ? data[0].images.planet
                  : data[0].images.internal
              }
              alt="Mercury"
            />
            {filter === "SURFACE" ? (
              <GeologyPicture src={data[0].images.geology} />
            ) : null}
          </div>

          <TabletPlanetAndFilterContainer>
            <TabletPlanetContainer>
              <PlanetName>{data[0].name}</PlanetName>
              <About>
                {filter === "OVERVIEW"
                  ? data[0].overview.content
                  : filter === "STRUCTURE"
                  ? data[0].structure.content
                  : filter === "SURFACE"
                  ? data[0].geology.content
                  : null}
              </About>
              <SourceContainer>
                <Source>
                  {" "}
                  Source :
                  <Wikipedia
                    href={
                      filter === "OVERVIEW"
                        ? data[0].overview.source
                        : filter === "STRUCTURE"
                        ? data[0].structure.source
                        : filter === "SURFACE"
                        ? data[0].geology.source
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

export default Mercury;
