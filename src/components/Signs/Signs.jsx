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
        <SignImage src="/assets/issa.png" />
      </SignImageWrapper>
      <SignRepsWrapper>
        <SignImage src="/assets/rep.png" />
      </SignRepsWrapper>
      <SignGoldsWrapper>
        <SignImage src="/assets/golds.png" />
      </SignGoldsWrapper>
      <SignUFCWrapper>
        <SignImage src="/assets/ufc.png" />
      </SignUFCWrapper>
    </SignsContainer>
  );
}
