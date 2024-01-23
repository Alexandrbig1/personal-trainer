import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  SlideImageWrapper,
  SlideImage,
  SlideWrapper,
  PrevButton,
  NextButton,
  Prev,
  Next,
} from "./SlideImages.styled";

export default function SlideImages() {
  const properties = {
    prevArrow: (
      <PrevButton>
        <Prev />
      </PrevButton>
    ),
    nextArrow: (
      <NextButton>
        <Next />
      </NextButton>
    ),
  };

  return (
    <SlideWrapper>
      <Slide
        {...properties}
        duration={5000}
        autoplay={true}
        infinite={true}
        pauseOnHover={false}
      >
        <SlideImageWrapper>
          <SlideImage src="images/slide1.jpg" alt="bodybuilding competition" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide2.jpg" alt="bodybuilding competition" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide3.jpg" alt="bodybuilding competition" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide4.jpg" alt="bodybuilding competition" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide5.jpg" alt="bodybuilding competition" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide6.jpg" alt="bodybuilding" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide7.jpg" alt="personal trainer" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide8.jpg" alt="bodybuilding" />
        </SlideImageWrapper>
        <SlideImageWrapper>
          <SlideImage src="images/slide9.jpg" alt="bodybuilding" />
        </SlideImageWrapper>
      </Slide>
    </SlideWrapper>
  );
}
