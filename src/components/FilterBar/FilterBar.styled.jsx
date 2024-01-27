import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { secondaryFont } from "../fonts";

export const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FilterBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: unset;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FilterBarTitle = styled.h2`
  display: flex;
  gap: 8px;
  font-family: ${secondaryFont};
  font-size: 28px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${(p) => p.theme.colors.mainTextColor};

  @media (min-width: 1440px) {
    margin: 0;
    flex-grow: 1;
    font-size: 44px;
  }
`;

export const FilterBarCategory = styled.span`
  display: flex;
  width: max-content;
  gap: 8px;
  color: ${(p) => p.theme.colors.secondaryBlackTextColorLowOp};
  font-size: 24px;
  font-family: ${secondaryFont};
`;

export const FilterBarDivide = styled.div`
  font-size: 28px;
  color: ${(p) => p.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 48px;
  }

  @media (min-width: 1440px) {
    justify-content: flex-end;
    align-items: start;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 30%;
  right: 3%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 15%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 30px;
  border: 1px solid ${(p) => p.theme.colors.mainTextColor};
  color: ${(p) => p.theme.colors.mainTextColor};
  outline: none;
  background-color: transparent;
  transition-property: border 0.3s linear;

  @media (min-width: 768px) {
    width: 273px;
    height: 48px;
    padding: 12px 14px;
    margin-right: 30px;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const FiltersMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 20px;
  text-align: left;

  @media (min-width: 1440px) {
    flex-wrap: nowrap;
    gap: 20px;
    margin: 0;
    height: 32px;
  }
`;
