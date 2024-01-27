import styled from "styled-components";
import { primaryFont } from "../fonts";

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.1rem;
`;
export const StarText = styled.p`
  margin-left: 0.7rem;
  color: ${(p) => p.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 600;
  line-height: 1.25;
`;
export const StarTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
`;
