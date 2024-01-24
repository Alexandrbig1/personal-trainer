import {
  SlideTextContainer,
  SlideTextMenu,
  SlideTextTitle,
  SlideItemsText,
  SlideTextSvg,
  SlideTextSmallCardWrapper,
  SlideTextItems,
  SlideCardsContainer,
  SlideItemsSubText,
  SlideIconsWrapper,
  SlideTitleWrapper,
  SlideTextTitleSub,
} from "./SlideText.styled";

export default function SlideText() {
  return (
    <SlideCardsContainer>
      <SlideTextContainer>
        <SlideTitleWrapper>
          <SlideTextTitle>Elite 1:1 Coaching Experience</SlideTextTitle>
          <SlideTextTitleSub>
            A completely Personalized Nutrition, Training, Cardio, and
            Supplementation Program based on your body type, height and desired
            physique goals. I'm here not just to instruct but to inspire,
            motivate, and guide you to reach your health and fitness goals.
          </SlideTextTitleSub>
        </SlideTitleWrapper>
        <SlideTextMenu>
          <SlideTextItems>
            <SlideTextSmallCardWrapper>
              <SlideIconsWrapper>
                <SlideTextSvg>
                  <use href="images/icons.svg#icon-fitness"></use>
                </SlideTextSvg>
              </SlideIconsWrapper>
              <SlideItemsText>Bodybuilding & Fitness</SlideItemsText>
              <SlideItemsSubText>
                Build strength, shape muscles, and boost overall fitness with
                tailored programs.
              </SlideItemsSubText>
            </SlideTextSmallCardWrapper>
          </SlideTextItems>
          <SlideTextItems>
            <SlideTextSmallCardWrapper>
              <SlideIconsWrapper>
                <SlideTextSvg>
                  <use href="images/icons.svg#icon-boxing"></use>
                </SlideTextSvg>
              </SlideIconsWrapper>
              <SlideItemsText>Boxing & MMA</SlideItemsText>
              <SlideItemsSubText>
                Discover your fighting spirit through boxing and MMA training.
              </SlideItemsSubText>
            </SlideTextSmallCardWrapper>
          </SlideTextItems>
          <SlideTextItems>
            <SlideTextSmallCardWrapper>
              <SlideIconsWrapper>
                <SlideTextSvg>
                  <use href="images/icons.svg#icon-gymnastics"></use>
                </SlideTextSvg>
              </SlideIconsWrapper>
              <SlideItemsText>Calisthenics & Gymnastics</SlideItemsText>
              <SlideItemsSubText>
                Achieve agility and strength with dynamic bodyweight exercises.
              </SlideItemsSubText>
            </SlideTextSmallCardWrapper>
          </SlideTextItems>
          <SlideTextItems>
            <SlideTextSmallCardWrapper>
              <SlideIconsWrapper>
                <SlideTextSvg>
                  <use href="images/icons.svg#icon-nutrition"></use>
                </SlideTextSvg>
              </SlideIconsWrapper>
              <SlideItemsText>Health & Nutrition</SlideItemsText>
              <SlideItemsSubText>
                Fuel your success with personalized health and nutrition
                guidance.
              </SlideItemsSubText>
            </SlideTextSmallCardWrapper>
          </SlideTextItems>
        </SlideTextMenu>
      </SlideTextContainer>
    </SlideCardsContainer>
  );
}
