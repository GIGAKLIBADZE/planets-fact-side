import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > div:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* border: solid 1px #fff; */
    opacity: 0.2;
  }

  & > div:hover {
    background-color: #d8d8d8;
    opacity: 0.2;
  }
`;

export const NotMobileFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
  width: 28.1rem;
  height: 4rem;
  cursor: pointer;
  position: relative;

  @media (min-width: 1440px) {
    width: 35rem;
    height: 4.8rem;
    gap: 1.6rem;
  }
`;

export const FilterText = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 2.78;
  letter-spacing: 1.93px;
  color: #fff;
  font-family: "League Spartan";
  z-index: 99;

  @media (min-width: 1440px) {
    font-size: 1.2rem;
    line-height: 2.8;
    letter-spacing: 2.57px;
    text-align: left;
  }
`;
