import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  /* display: grid;
  align-items: self-start;
  grid-template-columns: 1fr 2fr 1fr; */
`;

export const FooterText = styled.p`
  color: #f4f4f4;
  font-family: DM Sans;
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -1.12px;
`;

export const TextPrivacyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  max-width: 70rem;
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const FooterInfoText = styled.p`
  color: ${(p) => p.theme.colors.footerInfoColor};
  text-align: right;
  font-family: DM Sans;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;
