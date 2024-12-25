import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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

export const Text = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.93px;
  color: #fff;
  opacity: 0.5;
`;
