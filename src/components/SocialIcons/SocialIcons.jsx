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
          aria-label="Visit Alex Smagin's Instagram profile"
        >
          <InstagramIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://youtube.com/@ALEXandRbig1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin's YouTube channel"
        >
          <YoutubeIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://facebook.com/profile.php?id=100079407520314"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin's Facebook profile"
        >
          <FacebookIcon color={color} />
        </Link>
      </li>
      <li>
        <Link
          href="https://discord.gg/jH3tqxTh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Alex Smagin's Discord server"
        >
          <DiscordIcon color={color} />
        </Link>
      </li>
    </SocialMenu>
  );
}
