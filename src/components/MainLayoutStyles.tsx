import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem;
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
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.05px;
  color: #fff;
`;

export const Menu = styled.img`
  width: 2.4rem;
  height: 1.7rem;
`;
