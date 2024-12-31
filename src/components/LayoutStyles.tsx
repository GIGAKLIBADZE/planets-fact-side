import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  font-family: "Antonio";
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

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 4.3rem;
    padding: 3.2rem 0 2.7rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 2.2rem 4.1rem 2.7rem 3.2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.05px;
  color: #fff;

  @media (min-width: 768px) {
    letter-spacing: -1.05px;
  }
`;

export const Burger = styled.img`
  width: 2.4rem;
  height: 1.7rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
