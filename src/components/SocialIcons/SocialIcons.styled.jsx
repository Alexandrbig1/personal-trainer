import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

export const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Link = styled.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`;

export const InstagramIcon = styled(FaInstagram)`
  color: ${(props) =>
    props?.color ? props?.color?.white : props.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${(props) => (props?.hover ? props?.hover?.instagram : "#e1306c")};
  }
`;

export const YoutubeIcon = styled(FaYoutube)`
  color: ${(props) =>
    props?.color ? props?.color?.white : props.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${(props) => (props?.hover ? props?.hover?.youtube : "#ff0000")};
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  color: ${(props) =>
    props?.color ? props?.color?.white : props.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: color 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${(props) => (props?.hover ? props?.hover?.facebook : "#3b5998")};
  }
`;

export const DiscordIcon = styled(BsDiscord)`
  color: ${(props) =>
    props?.color ? props?.color?.white : props.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: color 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${(props) => (props?.hover ? props?.hover?.discord : "#7289d9")};
  }
`;
