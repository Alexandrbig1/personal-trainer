import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const LogoTitle = styled.span`
  /* color: ${(p) => p.theme.colors.mainTextColor}; */
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -1.48px;
`;

export const LogoIconWrapper = styled.div`
  width: 3.6rem;
  height: 2.4rem;
`;

export const LogoIcon = styled.svg`
  fill: ${(props) =>
    props.color ? props.color : props.theme.colors.mainTextColor};
  width: 100%;
  height: 100%;
`;
