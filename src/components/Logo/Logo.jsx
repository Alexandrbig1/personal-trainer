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
        <a href="#">
          <LogoIcon color={color}>
            <use href="public/images/icons.svg#icon-logo"></use>
          </LogoIcon>
        </a>
      </LogoIconWrapper>
      <a href="#">
        <LogoTitle color={color}>AlexSmagin</LogoTitle>
      </a>
    </LogoContainer>
  );
}
