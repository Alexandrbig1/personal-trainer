import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 10;
`;

export const HeroBtn = styled.button`
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.accentColor};
  outline: none;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: 6px;
  color: white;
  z-index: 20;
`;
