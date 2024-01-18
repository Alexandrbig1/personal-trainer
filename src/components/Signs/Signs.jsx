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
        <SignImage src="/images/issa.png" />
      </SignImageWrapper>
      <SignRepsWrapper>
        <SignImage src="/images/rep.png" />
      </SignRepsWrapper>
      <SignGoldsWrapper>
        <SignImage src="/images/golds.png" />
      </SignGoldsWrapper>
      <SignUFCWrapper>
        <SignImage src="/images/ufc.png" />
      </SignUFCWrapper>
    </SignsContainer>
  );
}
