import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { Field, Form, ErrorMessage } from "formik";

export const CalculatorContainer = styled.div`
  visibility: ${(props) => (props?.$showBMI ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;

  pointer-events: ${(props) => (props?.$showBMI ? "all" : "none")};
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.mainBackdropBgColor};
  opacity: ${(props) => (props?.$showBMI ? 1 : 0)};
  overflow: auto;
  z-index: 1000;
  backdrop-filter: blur(3px);

  @media (min-width: 1440px) {
    overflow: ${(props) => (props?.$showBMI ? "hidden" : "auto")};
  }
`;

export const CalculatorWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  padding: 4rem 2rem;
  color: ${(p) => p.theme.colors.mainTextColorRev};
  background-color: ${(p) => p.theme.colors.mainBgColorDark};
  border-radius: 2rem;
  z-index: 500;
  transition: 0.3s linear;

  position: absolute;
  top: 50%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const CloseBMICalculator = styled(IoMdClose)`
  color: ${(p) => p.theme.colors.mainBgColorLight};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const FieldStyled = styled(Field)`
  width: 24.4rem;
  padding: 1rem 1.2rem;
  border-radius: 0.6rem;
  outline: 1px solid transparent;
  background: none;
  border: none;
  background-color: ${(p) => p.theme.colors.mainBgColorLight};
  color: ${(p) => p.theme.colors.mainBgColorDark};

  &:hover {
    outline: 1px solid ${(p) => p.theme.colors.blueColor};
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
    color: ${(p) => p.theme.colors.secondaryBlackTextColorDark};
  }

  &:focus-within {
    outline: 1px solid ${(p) => p.theme.colors.blueColor};
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  margin-top: 0.2rem;
`;

export const FormError = styled(ErrorMessage)`
  color: ${(p) => p.theme.colors.redColor};
  position: absolute;
  bottom: -2.2rem;
  left: 0;
  font-size: 1.2rem;
`;

export const Label = styled.label`
  color: ${(p) => p.theme.colors.mainBgColorLight};
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const BMIButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem;
  background-color: ${(p) => p.theme.colors.blueColor};
  border-radius: 0.6rem;
  color: ${(p) => p.theme.colors.heroTextColor};
  cursor: pointer;
`;

export const BmiMessageWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

export const MessageIcon = styled.svg`
  width: 4.4rem;
  height: 4.4rem;
`;

export const BMIText = styled.p`
  color: ${(p) => p.theme.colors.mainBgColorLight};
  font-family: DM Sans;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0;
`;

export const BMISubText = styled.span`
  font-family: DM Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0;
`;

export const BmiTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
