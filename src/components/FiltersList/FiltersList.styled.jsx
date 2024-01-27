import styled, { css } from "styled-components";
import { secondaryFont } from "../fonts";

export const FiltersListItem = styled.li`
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 4px;
  cursor: pointer;
  transition: 0.3s linear;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${secondaryFont};

  &:hover,
  &:focus {
    border-bottom: 3px solid
      ${(p) => p.theme.colors.secondaryBlackTextColorLowOp};
  }

  ${(props) =>
    props?.$active &&
    css`
      border-bottom: 3px solid ${props.theme.colors.mainTextColor};
    `}
`;
