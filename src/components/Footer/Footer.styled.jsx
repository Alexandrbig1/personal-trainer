import styled from "styled-components";
import { robotoFont, secondaryFont } from "../fonts";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const FooterLogoSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 440px) {
    flex-direction: row;
    gap: 2.4rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FooterContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const FooterContactLinkText = styled.p`
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: ${secondaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid transparent;
`;

export const FooterContactIconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    ${FooterContactLinkText} {
      cursor: pointer;
      border-bottom: 1px solid ${(p) => p.theme.colors.heroTextColor};
    }
  }
`;

export const FooterContactIcons = styled.div`
  font-size: 1.8rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.8rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 4.8rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const FooterTextAndButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 4.8rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4.8rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4.8rem;
  }
`;

export const FooterText = styled.p`
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: ${robotoFont};
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -1.12px;

  @media (min-width: 365px) {
    font-size: 3.6rem;
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.8rem;
  }
`;

export const TextPrivacyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  max-width: 70rem;
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

export const FooterInfoText = styled.p`
  color: ${(p) => p.theme.colors.footerInfoColor};
  text-align: right;
  font-family: ${secondaryFont};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;
