import styled from "styled-components";

export const PlanetMenuContainer = styled.nav`
  display: flex;
  gap: 4rem;
`;

export const Planet = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 2.27;
  letter-spacing: 1px;
  color: #fff;
  font-family: "League Spartan";
  opacity: 0.75;
  position: relative;

  @media (min-width: 1440px) {
    &::before {
      content: "";
      position: absolute;
      top: -2.8rem;
      left: 0;
      width: 100%;
      height: 0.4rem;
    }
  }
`;
