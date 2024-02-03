import {
  LogoTitle,
  LogoIcon,
  LogoContainer,
  LogoIconWrapper,
} from "./Logo.styled";

export default function Logo({ color }) {
  return (
    <LogoContainer>
      <LogoIconWrapper>
        <a
          href="https://alexsmagin.com"
          aria-label="Visit alexsmagin.com Alex Smagin's website"
        >
          <LogoIcon color={color}>
            <use href="/images/icons.svg#icon-logo"></use>
          </LogoIcon>
        </a>
      </LogoIconWrapper>
      <a
        href="https://alexsmagin.com"
        aria-label="Visit alexsmagin.com Alex Smagin's website"
      >
        <LogoTitle color={color}>AlexSmagin</LogoTitle>
      </a>
    </LogoContainer>
  );
}
