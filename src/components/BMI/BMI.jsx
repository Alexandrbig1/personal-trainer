import { useState } from "react";
import BMICalculator from "../BMICalculator/BMICalculator";
import { BMIHeaderText, BmiContainer } from "./BMI.styled";
import Tooltip from "@mui/material/Tooltip";

export default function BMI() {
  const [showBMI, setShowBMI] = useState(false);

  return (
    <Tooltip title="Check BMI" placement="bottom" arrow>
      <BmiContainer>
        {showBMI && <BMICalculator showBMI={showBMI} setShowBMI={setShowBMI} />}
        <BMIHeaderText onClick={() => setShowBMI((prevState) => !prevState)}>
          BMI
        </BMIHeaderText>
      </BmiContainer>
    </Tooltip>
  );
}
