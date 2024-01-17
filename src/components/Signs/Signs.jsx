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
        <SignImage src="/src/assets/issa.png" />
      </SignImageWrapper>
      <SignRepsWrapper>
        <SignImage src="/src/assets/rep.png" />
      </SignRepsWrapper>
      <SignGoldsWrapper>
        <SignImage src="/src/assets/golds.png" />
      </SignGoldsWrapper>
      <SignUFCWrapper>
        <SignImage src="/src/assets/ufc.png" />
      </SignUFCWrapper>
    </SignsContainer>
  );
}
