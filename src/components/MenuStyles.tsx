import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 0 2.4rem;
`;

export const EachPlanetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 2rem 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
    opacity: 0.1;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RoundColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const EachPlanet = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.67;
  letter-spacing: 1.36px;
  color: #fff;
  font-family: "Spartan";
  margin-left: 2.5rem;
`;

export const Arrow = styled.img`
  width: 0.4rem;
  height: 0.8rem;
`;
