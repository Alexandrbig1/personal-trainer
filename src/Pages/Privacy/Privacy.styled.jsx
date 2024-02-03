import styled from "styled-components";

export const PrivacyContainer = styled.div`
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

export const PrivacyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
