import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 3.2rem;
  justify-content: space-between;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: space-between;
  }
`;

export const FooterContainer = styled.footer`
  padding: 6.4rem 3.2rem 1.6rem;
  background-color: ${(p) => p.theme.colors.footerBgColor};
`;

export const Section = styled.section`
  margin-bottom: 8.6rem;
`;

export const SectionExercise = styled(Section)`
  @media (min-width: 768px) {
    padding: 40px 0 40px;
  }

  @media (min-width: 1440px) {
    /* padding-bottom: 132px; */
  }
`;

export const Line = styled.div`
  height: 0.1px;
  max-width: 100%;
  background-color: ${(p) => p.theme.colors.accentColor};
  margin: 0 24rem;
`;
