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
        <SignImage
          src="images/issa.png"
          alt="issa certified personal trainer"
          loading="lazy"
        />
      </SignImageWrapper>
      <SignRepsWrapper>
        <SignImage
          src="images/rep.png"
          alt="reps certified personal trainer"
          loading="lazy"
        />
      </SignRepsWrapper>
      <SignGoldsWrapper>
        <SignImage src="images/golds.png" alt="gold's gym" loading="lazy" />
      </SignGoldsWrapper>
      <SignUFCWrapper>
        <SignImage src="images/ufc.png" alt="ufc" loading="lazy" />
      </SignUFCWrapper>
    </SignsContainer>
  );
}
