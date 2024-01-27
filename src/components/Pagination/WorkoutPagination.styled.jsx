import styled from "styled-components";

export const WorkoutPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 46px;
`;

export const WorkoutPaginationButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${(p) =>
    p.$active
      ? p.theme.colors.mainTextColor
      : p.theme.colors.notActivePaginationButton};
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.96px;
  cursor: pointer;
  transition: 0.3s linear;

  padding: ${(p) => (p.$active ? "0px 10px" : "0")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${(p) => (p.$active ? "18px" : "0")};
  border: ${(p) =>
    p.$active ? `1px solid ${p.theme.colors.mainTextColor}` : "none"};

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;
