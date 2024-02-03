import { useInView } from "react-intersection-observer";
import Header from "../../components/Header/Header";
import BMI from "../../components/BMI/BMI";
import Hero from "../../components/Hero/Hero";
import SlideText from "../../components/SlideText/SlideText";
import SlideImages from "../../components/SlideImages/SlideImages";
import About from "../../components/About/About";
import FetchedCards from "../../components/FetchedCards/FetchedCards";
import Signs from "../../components/Signs/Signs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  Container,
  Section,
  SectionExercise,
  SlideContainer,
} from "../../components/Layout";

export default function Home({ toggleTheme, isDarkTheme }) {
  const { ref: exerciseRef, inView: exerciseInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "100px",
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "100px",
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Alex Smagin - Personal Trainer</title>
          <meta
            name="description"
            content="Explore the world of fitness with Alex Smagin, a dedicated personal trainer. Discover fitness programs, exercise demos, and connect with a passionate fitness professional."
          />
          <meta
            name="keywords"
            content="Alex Smagin, personal trainer, fitness, nutritionist, MMA boxing coach, calisthenics, gymnastics, React, Vite, web development, frontend, software engineer"
          />
        </Helmet>
      </HelmetProvider>
      <Container>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </Container>
      <main>
        <Container>
          <BMI />
          <Section>
            <Hero />
          </Section>
          <Section id="gallery">
            <SlideContainer>
              <SlideText />
              <SlideImages />
            </SlideContainer>
          </Section>
          <Section ref={aboutRef} $inView={aboutInView}>
            <About />
          </Section>
        </Container>
        <SectionExercise
          id="exercises"
          ref={exerciseRef}
          $inView={exerciseInView}
        >
          <Container>
            <FetchedCards />
          </Container>
        </SectionExercise>
        <Section>
          <Container>
            <Signs />
          </Container>
        </Section>
      </main>
    </>
  );
}
