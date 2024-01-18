import * as Yup from "yup";
import { Formik } from "formik";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import * as React from "react";
import {
  CalculatorWrapper,
  CalculatorContainer,
  CloseBMICalculator,
  FieldStyled,
  InputWrapper,
  FormError,
  FormWrapper,
  Label,
  BMIButton,
  BmiMessageWrapper,
  MessageIcon,
  BMIText,
  BmiTextWrapper,
  InputContainer,
  BMISubText,
} from "./BMICalculator.styled";

export default function BMICalculator({ showBMI, setShowBMI }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  React.useEffect(() => {
    if (bmi < 18.5) {
      setMessage("You are underweight");
      setIcon("/images/icons.svg#icon-fitness");
      setColor("#00cc44");
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("You are on a good shape");
      setIcon("/images/icons.svg#icon-yoga");
      setColor("#3399ff");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are overweight");
      setIcon("/images/icons.svg#icon-run");
      setColor("#ff9900");
    } else {
      setMessage("You are in the obesity range");
      setIcon("/images/icons.svg#icon-over");
      setColor("#ff3300");
    }
  }, [bmi]);

  function handleSubmit(e) {
    const weight = e.weight;
    const height = e.height;

    setBmi(Number(((weight / (height * height)) * 703).toFixed(1)));

    setWeight("");
    setHeight("");
  }

  function handleCloseCalculator() {
    setShowBMI((prevState) => !prevState);
  }

  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  const formSchema = Yup.object({
    weight: Yup.string()
      .max(3, "Weight should be up to 3 characters")
      .required("Please fill up your weight!"),
    height: Yup.string()
      .max(2, "Height should be up to 2 characters")
      .required("Please fill up your height!"),
  });

  return (
    <CalculatorContainer $showBMI={showBMI}>
      <CalculatorWrapper>
        <CloseBMICalculator onClick={handleCloseCalculator} />
        <Formik
          initialValues={{
            weight: weight,
            height: height,
          }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.resetForm({
              values: {
                weight: weight,
                height: height,
              },
            });
          }}
        >
          <FormWrapper>
            <InputContainer>
              <div>
                <Label htmlFor="weight">Weight (lbs)</Label>
                <InputWrapper>
                  <FieldStyled type="number" name="weight" placeholder="0" />
                  <FormError component="span" name="weight" />
                </InputWrapper>
              </div>

              <div>
                <Label htmlFor="height">Height (in)</Label>
                <InputWrapper>
                  <FieldStyled type="number" name="height" placeholder="0" />
                  <FormError component="span" name="height" />
                </InputWrapper>
              </div>
            </InputContainer>
            <div>
              <Tooltip
                title="Check"
                placement="top"
                arrow
                PopperProps={{
                  popperRef,
                  anchorEl: {
                    getBoundingClientRect: () => {
                      return new DOMRect(
                        positionRef.current.x,
                        areaRef.current.getBoundingClientRect().y,
                        0,
                        0
                      );
                    },
                  },
                }}
              >
                <BMIButton
                  onMouseMove={handleMouseMove}
                  ref={areaRef}
                  type="submit"
                >
                  Check your BMI
                </BMIButton>
              </Tooltip>
            </div>
          </FormWrapper>
        </Formik>
        {bmi > 0 && (
          <BmiMessageWrapper>
            <BmiTextWrapper>
              <BMIText>
                Your BMI is{" "}
                <BMISubText style={{ color: color }}>{bmi}</BMISubText>
              </BMIText>
              <BMIText>{message}</BMIText>
            </BmiTextWrapper>
            <div>
              <MessageIcon>
                <use href={icon}></use>
              </MessageIcon>
            </div>
          </BmiMessageWrapper>
        )}
      </CalculatorWrapper>
    </CalculatorContainer>
  );
}
