import React from "react";
import { Section, NotMobileFilter, FilterText } from "./ResponsiveFilterStyles";
import data from "../data.json";
import { useParams } from "react-router-dom";

const ResponsiveFilter: React.FC<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filter, setFilter }) => {
  const { name } = useParams();
  const firstPlanet = data[0].name;

  const planet = data.find((d) => d.name === name);
  const planetName = planet?.name;
  return (
    <>
      <Section>
        <NotMobileFilter
          onClick={() => setFilter("OVERVIEW")}
          style={{
            backgroundColor:
              filter === "OVERVIEW" && planetName === "Mercury"
                ? "#419ebb"
                : filter === "OVERVIEW" && planetName === "Venus"
                ? "#eda249"
                : filter === "OVERVIEW" && planetName === "Earth"
                ? "#6d2ed5"
                : filter === "OVERVIEW" && planetName === "Mars"
                ? "#d14c32"
                : filter === "OVERVIEW" && planetName === "Jupiter"
                ? "#d83a34"
                : filter === "OVERVIEW" && planetName === "Saturn"
                ? "#cd5120"
                : filter === "OVERVIEW" && planetName === "Uranus"
                ? "#1ec1a2"
                : filter === "OVERVIEW" && planetName === "Neptune"
                ? "#2d68f0"
                : filter === "OVERVIEW" && firstPlanet === "Mercury"
                ? "#419ebb"
                : "",
          }}
          className={filter === "OVERVIEW" ? "clicked" : "noClicked"}
        >
          <FilterText style={{ opacity: 0.5, marginLeft: "2rem" }}>
            {" "}
            01
          </FilterText>
          <FilterText>OVERVIEW</FilterText>
        </NotMobileFilter>
        <NotMobileFilter
          onClick={() => setFilter("STRUCTURE")}
          style={{
            backgroundColor:
              filter === "STRUCTURE" && planetName === "Mercury"
                ? "#419ebb"
                : filter === "STRUCTURE" && planetName === "Venus"
                ? "#eda249"
                : filter === "STRUCTURE" && planetName === "Earth"
                ? "#6d2ed5"
                : filter === "STRUCTURE" && planetName === "Mars"
                ? "#d14c32"
                : filter === "STRUCTURE" && planetName === "Jupiter"
                ? "#d83a34"
                : filter === "STRUCTURE" && planetName === "Saturn"
                ? "#cd5120"
                : filter === "STRUCTURE" && planetName === "Uranus"
                ? "#1ec1a2"
                : filter === "STRUCTURE" && planetName === "Neptune"
                ? "#2d68f0"
                : filter === "STRUCTURE" && firstPlanet === "Mercury"
                ? "#419ebb"
                : "",
          }}
          className={filter === "STRUCTURE" ? "clicked" : "noClicked"}
        >
          <FilterText style={{ opacity: 0.5, marginLeft: "2rem" }}>
            {" "}
            02
          </FilterText>
          <FilterText>INTERNAL STRUCTURE</FilterText>
        </NotMobileFilter>
        <NotMobileFilter
          onClick={() => setFilter("SURFACE")}
          style={{
            backgroundColor:
              filter === "SURFACE" && planetName === "Mercury"
                ? "#419ebb"
                : // : filter === "SURFACE" && firstPlanet === "Mercury"
                // ? "#419ebb"
                filter === "SURFACE" && planetName === "Venus"
                ? "#eda249"
                : filter === "SURFACE" && planetName === "Earth"
                ? "#6d2ed5"
                : filter === "SURFACE" && planetName === "Mars"
                ? "#d14c32"
                : filter === "SURFACE" && planetName === "Jupiter"
                ? "#d83a34"
                : filter === "SURFACE" && planetName === "Saturn"
                ? "#cd5120"
                : filter === "SURFACE" && planetName === "Uranus"
                ? "#1ec1a2"
                : filter === "SURFACE" && planetName === "Neptune"
                ? "#2d68f0"
                : filter === "SURFACE" && firstPlanet === "Mercury"
                ? "#419ebb"
                : "",
          }}
          className={filter === "SURFACE" ? "clicked" : "noClicked"}
        >
          <FilterText style={{ opacity: 0.5, marginLeft: "2rem" }}>
            {" "}
            03
          </FilterText>
          <FilterText>SURFACE GEOLOGY</FilterText>
        </NotMobileFilter>
      </Section>
    </>
  );
};

export default ResponsiveFilter;
