import styled from "styled-components";
import { secondaryFont } from "../fonts";

export const NoWorkoutsText = styled.p`
  text-align: center;
  font-family: sans-serif;
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 400;
  color: ${(p) => p.theme.colors.mainTextColor};

  @media (max-width: 374px) {
    width: 100%;
    font-size: 14px;
    line-height: 1.28;
    margin-top: 3rem;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 318px;
    font-size: 14px;
    line-height: 1.28;
    margin-top: 5rem;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 554px;
    font-size: 18px;
    line-height: 1.33;
    margin-top: 5rem;
  }

  @media (min-width: 1440px) {
    width: 554px;
    font-size: 18px;
    line-height: 1.33;
    margin-top: 10rem;
    margin-right: 10rem;
  }
`;
