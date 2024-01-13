import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.4rem;
  justify-content: space-between;
  /* align-items: center; */
`;

export const AboutImg = styled.img`
  width: 100%;
  border-radius: 1.2rem;
`;

export const IconsCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: calc((100% - 2.4rem) / 2);
  padding: 4.8rem 2.4rem 2.4rem;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${(p) => p.theme.colors.aboutBgColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.accentColorLowOp};
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4.8rem;
  column-gap: 2.4rem;
`;

export const Certificate = styled.div`
  position: absolute;
  top: -3rem;
  align-self: center;
  font-size: 3.6rem;
  padding: 1.2rem;
  border-radius: 50rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-bottom: 1.2rem;
  z-index: 1;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.accentColor};
`;

export const AboutCardTitle = styled.h3`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0.8rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.accentColorLowOp};
`;

export const AboutCardText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const AboutCardImportantText = styled.strong`
  color: ${(p) => p.theme.colors.accentColor};
  font-family: "DM Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const TextMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const TextList = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const RadioIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.greenColor};
`;
