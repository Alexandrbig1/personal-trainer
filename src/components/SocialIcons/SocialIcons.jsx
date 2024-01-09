import {
  FacebookIcon,
  InstagramIcon,
  Link,
  SocialMenu,
  YoutubeIcon,
} from "./SocialIcons.styled";

export default function SocialIcons({ color }) {
  return (
    <SocialMenu>
      <li>
        <Link
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon color={color} />
        </Link>
      </li>
    </SocialMenu>
  );
}
