import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const LogoTitle = styled.span`
  color: ${(props) =>
    props?.color ? props?.color?.white : props.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -1.48px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const LogoIconWrapper = styled.div`
  width: 3.6rem;
  height: 2.4rem;
`;

export const LogoIcon = styled.svg`
  fill: ${(props) =>
    props?.color ? props?.color?.white : props.theme.colors.mainTextColor};

  width: 100%;
  height: 100%;
`;
