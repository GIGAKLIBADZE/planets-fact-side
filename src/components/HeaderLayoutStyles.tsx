import styled from "styled-components";

interface Idata {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 7.4rem;
  padding: 2rem 2.4rem;
  font-family: "League Spartan";
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: #fff;
    opacity: 0.2;
  }
`;

export const Text = styled.p<{ planetName: string | undefined }>`
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.93px;
  color: #fff;
  opacity: 0.5;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: -7%;
    width: 110%;
    height: 0.4rem;
    background: ${({ planetName }) =>
      planetName === "Mercury"
        ? "#419ebb"
        : planetName === "Venus"
        ? "#eda249"
        : planetName === "Earth"
        ? "#6d2ed5"
        : planetName === "Mars"
        ? "#d14c32"
        : planetName === "Jupiter"
        ? "#d83a34"
        : planetName === "Saturn"
        ? "#cd5120"
        : planetName === "Uranus"
        ? "#1ec1a2"
        : planetName === "Neptune"
        ? "#2d68f0"
        : ""};
  }
`;

export const TextPaddle = styled.div`
  width: 8rem;
  height: 0.4rem;
  background-color: #fff;
`;
