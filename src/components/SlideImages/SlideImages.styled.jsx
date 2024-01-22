import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const SlideWrapper = styled.div`
  width: 100%;
  max-width: 336px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 704px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 882px;
    height: auto;
  }
`;

export const SlideImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const SlideImage = styled.img`
  width: 100%;
  border-radius: 1.2rem;
  height: 224px;

  @media (min-width: 768px) {
    height: 470px;
  }

  @media (min-width: 1440px) {
    height: 640px;
  }
`;

export const Prev = styled(SlArrowLeft)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.slideArrowButtons};
  transition: 0.2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;

export const Next = styled(SlArrowRight)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.slideArrowButtons};
  transition: 0.3s linear;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;

export const PrevButton = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.iconsBgColorLowOp};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.8rem;

  @media (min-width: 768px) {
    width: 3.8rem;
    height: 3.8rem;
    margin-left: 1.2rem;
  }

  @media (min-width: 1440px) {
    width: 4.4rem;
    height: 4.4rem;
  }

  &:hover {
    ${Prev} {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const NextButton = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.iconsBgColorLowOp};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.8rem;

  @media (min-width: 768px) {
    width: 3.8rem;
    height: 3.8rem;
    margin-right: 1.2rem;
  }

  @media (min-width: 1440px) {
    width: 4.4rem;
    height: 4.4rem;
  }

  &:hover {
    ${Next} {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;
