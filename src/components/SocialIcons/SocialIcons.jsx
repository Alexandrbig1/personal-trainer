import {
  DiscordIcon,
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
          href="https://instagram.com/fitlife_alex1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://youtube.com/@ALEXandRbig1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://facebook.com/profile.php?id=100079407520314"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://discord.gg/4SmUx4ya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon color={color} />
        </Link>
      </li>
    </SocialMenu>
  );
}
