import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { primaryFont, sansFont, secondaryFont } from "../../components/fonts";

export const MainContainer = styled.main`
  margin: 0 auto;
  padding: 4.8rem 0;
  min-height: 100vh;
`;

export const TermsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.4rem;
  gap: 4.8rem;
  width: 100%;
  max-width: 90rem;
  background-color: ${(p) => p.theme.colors.secondaryBgColor};
  border-radius: 1.2rem;

  @media (min-width: 1440px) {
    max-width: 90rem;
  }
`;

export const TermsTitle = styled.h2`
  color: ${(p) => p.theme.colors.mainTextColor};
  text-align: center;
  font-family: DM Sans;
  font-family: ${primaryFont};
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.09;
  letter-spacing: -0.88px;

  @media (min-width: 375px) {
    font-size: 3.2rem;
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.4rem;
  }
`;

export const TermsSubTitle = styled.h3`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.09;

  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }
`;

export const TermsText = styled.p`
  border-bottom: 1px solid transparent;
  font-family: ${secondaryFont};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  color: ${(p) => p.theme.colors.mainTextColor};

  @media (min-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const LinkBackArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: ${(p) => p.theme.colors.mainTextColor};

  position: absolute;
  top: -2.8rem;
  left: 1.2rem;
`;

export const LinkBackArrowText = styled.p`
  border-bottom: 1px solid transparent;
  font-family: ${sansFont};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: 0.3s ease-in-out;
`;

export const ArrowBack = styled(FaArrowLeftLong)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: 0.3s ease-in-out;
`;

export const LinkBackArrow = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    ${LinkBackArrowText} {
      border-bottom: 1px solid ${(p) => p.theme.colors.mainTextColor};
    }
  }

  &:hover {
    ${ArrowBack} {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const TextMail = styled.strong`
  font-weight: 600;
  line-height: 1.2;
  font-family: ${primaryFont};
`;

export const TermsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const TermsItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const TermsContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
