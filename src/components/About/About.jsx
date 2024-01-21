import { TbCertificate } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { IoEarth } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import {
  Certificate,
  AboutContainer,
  IconsContainer,
  IconsCardWrapper,
  AboutCardTitle,
  AboutCardText,
  AboutCardImportantText,
  AboutImg,
  RadioIcon,
  TextMenu,
  TextList,
} from "./About.styled";

export default function About() {
  return (
    <AboutContainer id="about">
      <div>
        <AboutImg src="images/about.jpg" alt="Personal Trainer in UFC Gym" />
      </div>
      <IconsContainer>
        <IconsCardWrapper>
          <Certificate>
            <TbCertificate />
          </Certificate>
          <AboutCardTitle>Certified Fitness Professional</AboutCardTitle>
          <TextMenu>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>Certified US Personal Trainer</AboutCardText>
            </TextList>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>Certified Bodybuilding Specialist</AboutCardText>
            </TextList>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>Certified MMA/Boxing coach</AboutCardText>
            </TextList>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>Certified Nutritionist</AboutCardText>
            </TextList>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>Master's in Physical Therapy</AboutCardText>
            </TextList>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>
                Certified Personal Trainer in Ukraine
              </AboutCardText>
            </TextList>
            <TextList>
              <RadioIcon>
                <FaCheck />
              </RadioIcon>
              <AboutCardText>Certified Personal Trainer in UAE</AboutCardText>
            </TextList>
          </TextMenu>
        </IconsCardWrapper>
        <IconsCardWrapper>
          <Certificate>
            <IoEarth />
          </Certificate>
          <AboutCardTitle>Global Expertise</AboutCardTitle>
          <AboutCardText>
            <AboutCardImportantText>
              14+ Years of International Experience.
            </AboutCardImportantText>{" "}
            Explore fitness with a trainer who brings a wealth of knowledge from
            diverse countries, offering a global perspective to tailor your
            training.
          </AboutCardText>
        </IconsCardWrapper>
        <IconsCardWrapper>
          <Certificate>
            <CgGym />
          </Certificate>
          <AboutCardTitle>Unlock Your Full Potential</AboutCardTitle>
          <AboutCardText>
            <AboutCardImportantText>
              Build fitness plans for individual goals.
            </AboutCardImportantText>{" "}
            Experience fitness on a personal level with programs designed
            exclusively for you, based on your unique aspirations and current
            fitness levels.
          </AboutCardText>
        </IconsCardWrapper>
        <IconsCardWrapper>
          <Certificate>
            <GiBiceps />
          </Certificate>
          <AboutCardTitle>Journey Through Sports</AboutCardTitle>
          <AboutCardText>
            <AboutCardImportantText>
              Train with a champion.
            </AboutCardImportantText>{" "}
            Beginning my sports journey at the age of 4, I participated in
            gymnastics, football, bodybuilding, and MMA, achieving success as
            both a champion and finalist in national and international
            competitions. I'm here to guide you to success.
          </AboutCardText>
        </IconsCardWrapper>
      </IconsContainer>
    </AboutContainer>
  );
}
