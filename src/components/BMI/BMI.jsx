import { useState } from "react";
import BMICalculator from "../BMICalculator/BMICalculator";
import { BMIHeaderText, BmiContainer } from "./BMI.styled";

export default function BMI() {
  const [showBMI, setShowBMI] = useState(false);

  return (
    <BmiContainer>
      {showBMI && <BMICalculator showBMI={showBMI} setShowBMI={setShowBMI} />}
      <BMIHeaderText onClick={() => setShowBMI((prevState) => !prevState)}>
        BMI
      </BMIHeaderText>
    </BmiContainer>
  );
}
