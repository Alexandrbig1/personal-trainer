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
        <LogoIcon color={color}>
          <use href="/public/symbol-defs.svg#icon-logo"></use>
        </LogoIcon>
      </LogoIconWrapper>
      <LogoTitle color={color}>AlexSmagin</LogoTitle>
    </LogoContainer>
  );
}
