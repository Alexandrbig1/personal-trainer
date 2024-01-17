import styled from "styled-components";

export const SignsContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 1440px) {
    gap: 2.4rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SignImageWrapper = styled.div`
  width: 12rem;
  height: auto;
  background-color: ${(p) => p.theme.colors.initialCardTextColor};
  border-radius: 50rem;

  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;

export const SignRepsWrapper = styled.div`
  width: 12rem;
  height: auto;
  /* background-color: ${(p) => p.theme.colors.mainBgColorRev}; */
  border-radius: 50rem;

  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;

export const SignGoldsWrapper = styled.div`
  width: 12rem;
  height: auto;
  /* background-color: ${(p) => p.theme.colors.mainBgColorRev}; */
  border-radius: 50rem;
  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;

export const SignUFCWrapper = styled.div`
  width: 10rem;
  height: auto;

  @media (min-width: 768px) {
    width: 14rem;
  }
  @media (min-width: 1440px) {
    width: 16rem;
  }
  /* background-color: ${(p) => p.theme.colors.mainBgColorRev}; */
  /* border-radius: 50rem; */
`;

export const SignImage = styled.img`
  width: 100%;
  height: 100%;
`;
