import {
  SignGoldsWrapper,
  SignImage,
  SignImageWrapper,
  SignRepsWrapper,
  SignUFCWrapper,
  SignsContainer,
} from "./Signs.styled";

export default function Signs() {
  return (
    <SignsContainer>
      <SignImageWrapper>
        <SignImage src="public/images/issa.png" />
      </SignImageWrapper>
      <SignRepsWrapper>
        <SignImage src="public/images/rep.png" />
      </SignRepsWrapper>
      <SignGoldsWrapper>
        <SignImage src="public/images/golds.png" />
      </SignGoldsWrapper>
      <SignUFCWrapper>
        <SignImage src="public/images/ufc.png" />
      </SignUFCWrapper>
    </SignsContainer>
  );
}
