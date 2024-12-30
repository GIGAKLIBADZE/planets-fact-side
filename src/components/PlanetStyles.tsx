import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem 4.7rem 2.4rem;

  @media (min-width: 4rem) {
    padding: 0 4rem 3.6rem 4rem;
  }
`;

export const PlanetPicture = styled.img`
  width: 11.1rem;
  height: 11.1rem;
  margin-top: 9.5rem;

  @media (min-width: 4rem) {
    margin-top: 14.6rem;
  }
`;

export const GeologyPicture = styled.img`
  width: 6rem;
  height: 6rem;
  margin-top: -4rem;
`;

export const TabletPlanetAndFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.9rem;
  margin-top: 9.8rem;

  /* @media (min-width: 768px) {
    display: block;
  } */
`;

export const TabletPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const PlanetName = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  color: #fff;
  font-family: "Antonio";
  /* margin-top: 9.8rem; */

  @media (min-width: 768px) {
    font-size: 4.8rem;
    text-align: left;
  }
`;

export const About = styled.p`
  font-size: 1.1rem;
  font-weight: normal;
  line-height: 2;
  text-align: center;
  color: #fff;
  font-family: "League Spartan";
  margin-top: 1.6rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 2.4rem;
  }
`;

export const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 2.08;
  color: #fff;
  font-family: "League Spartan";
  opacity: 0.5;
  margin-top: 3.2rem;
`;

export const Source = styled.p`
  font-weight: normal;
`;

export const Wikipedia = styled.a`
  font-weight: bold;
  color: #fff;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2.8rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem 2.4rem 1.3rem;
    position: relative;
    width: 32.7rem;
  }

  & > div:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid 1px #fff;
    opacity: 0.2;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.1rem;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 0.6rem;
      padding: 1.6rem 2.6rem 1.9rem 1.5rem;
      width: 16.4rem;
    }
  }
`;

export const InfoTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 0.73px;
  color: #fff;
  font-family: "League Spartan";
  opacity: 0.5;
`;

export const Info = styled.span`
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
  color: #fff;
  font-family: "Antonio";
`;
