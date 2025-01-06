import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem 4.7rem 2.4rem;
`;

export const PlanetPicture = styled.img`
  width: 17.3rem;
  height: 17.3rem;

  @media (min-width: 768px) {
    width: 28.5rem;
    height: 28.5rem;
  }

  @media (min-width: 1440px) {
    width: 29rem;
    height: 29rem;
  }
`;

export const GeologyPicture = styled.img`
  width: 6rem;
  height: 6rem;
  margin-top: -2rem;
  margin-left: 5.5rem;

  @media (min-width: 768px) {
    width: 14rem;
    height: 14rem;
    margin-top: -8rem;
    margin-left: 7.5rem;
  }

  @media (min-width: 768px) {
    width: 16rem;
    height: 16rem;
    margin-left: 6.5rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.4rem;

  @media (min-width: 768px) {
    margin-top: 9.6rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 30rem;
    margin-top: 12.6rem;
  }
`;

export const TabletPlanetAndFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.9rem;
  margin-top: 9.8rem;

  @media (min-width: 768px) {
    max-width: 100rem;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const TabletPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    width: 35rem;
  }
`;

export const PlanetName = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  color: #fff;
  font-family: "Antonio";

  @media (min-width: 768px) {
    font-size: 4.8rem;
    text-align: left;
  }

  @media (min-width: 1440px) {
    font-size: 8rem;
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

  @media (min-width: 1440px) {
    font-size: 1.4rem;
    line-height: 1.79rem;
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

  @media (min-width: 1440px) {
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.79;
  }
`;

export const Source = styled.p`
  font-weight: normal;
`;

export const Wikipedia = styled.a`
  font-weight: bold;
  color: #fff;
`;

export const PlanetSection = styled.section`
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
    max-width: 1000px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 0.6rem;
      padding: 1.6rem 2.6rem 1.9rem 1.5rem;
      width: 16.4rem;

      @media (min-width: 1440px) {
        gap: 0.4rem;
        width: 25rem;
        padding: 2rem 0 2.7rem 2.3rem;
      }
    }
  }

  @media (min-width: 1440px) {
    margin-top: 8.7rem;
    gap: 3rem;
    margin-left: -6rem;
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

  @media (min-width: 1440px) {
    font-size: 1.1rem;
    line-height: 2.27;
    letter-spacing: 1px;
  }
`;

export const Info = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
  color: #fff;
  font-family: "Antonio";

  @media (min-width: 1440px) {
    font-size: 4rem;
    letter-spacing: -1.5px;
  }
`;

export const Invalid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
`;

export const InvalidText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  font-family: "Antonio";
`;
