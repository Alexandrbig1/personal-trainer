import Cta from "../CTA/Cta";
import {
  HeroContainer,
  HeroImg,
  HeroImgWrapper,
  HeroTextWrapper,
  HeroImgContainer,
  HeroTitle,
  HeroText,
} from "./Hero.styled";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroImgWrapper>
        <HeroImgContainer>
          <HeroImg src="/assets/pt.png" alt="Personal Trainer" />
        </HeroImgContainer>
        <HeroTextWrapper>
          <HeroTitle>
            Achieve Your Fitness Goals, Embrace a Happy and Healthy Lifestyle
          </HeroTitle>
          <HeroText>
            As a champion in gymnastics, bodybuilding, and MMA, I bring over 14
            years of expertise to your fitness goals. National champion,
            international competitor, and a certified US personal trainer. Let's
            build your success story together. Be fit, live well. Contact me to
            start your journey today.
          </HeroText>
          <Cta />
        </HeroTextWrapper>
      </HeroImgWrapper>
    </HeroContainer>
  );
}
