import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (375px<=width) {
    max-width: 37.5rem;
  }

  @media (768px<=width) {
    max-width: 76.8rem;
    padding: 0 32px;
  }

  @media (1440px<=width) {
    max-width: 144rem;
  }
`;

export const FooterContainer = styled.footer`
  padding: 6.4rem 3.2rem 1.6rem;
  background-color: ${(p) => p.theme.colors.footerBgColor};
`;

export const Section = styled.section`
  margin-bottom: 8.6rem;
`;
