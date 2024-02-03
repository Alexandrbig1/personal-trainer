import useApiService from "../../services/apiService";
import { useEffect, useState } from "react";
import ReadMoreText from "../ReadMore/ReadMore";
import {
  QuotesWrapper,
  QuotesContainer,
  QuotesInfo,
  QuotesImage,
  QuotesIconWrapper,
  QuotesTextWrapper,
  QuotesIconLogo,
  QuotesTitle,
  QuotesTitleWrapper,
  QuoteIcon,
  QuotesText,
  QuotesImageWrapper,
  QuotesInfoWrapper,
  QuotesGymIcon,
  QuotesWorkoutTextWrapper,
  QuotesWorkoutTitleWrapper,
  QuotesWorkoutTitle,
  QuotesWorkoutSubTitle,
  QuotesAuthor,
} from "./Quote.styled";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const { fetchQuote } = useApiService();

  useEffect(() => {
    function getDate() {
      const currentDate = new Date();

      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const day = currentDate.getDate().toString().padStart(2, "0");

      const today = `${day}/${month}/${year}`;

      return today;
    }

    async function fetchNewQuote() {
      try {
        const { quote, author } = await fetchQuote();
        setQuote(quote);
        setAuthor(author);

        const currentDate = getDate();

        localStorage.setItem("today", currentDate);
        localStorage.setItem("quote", quote);
        localStorage.setItem("author", author);

        return { quote, author };
      } catch (error) {
        console.error("Error fetching new quote:", error.message);
      }
    }

    const storedDate = localStorage.getItem("today");
    const currentDate = getDate();

    if (!storedDate || storedDate !== currentDate) {
      fetchNewQuote();
    } else {
      const storedQuote = localStorage.getItem("quote");
      const storedAuthor = localStorage.getItem("author");

      setQuote(storedQuote || "");
      setAuthor(storedAuthor || "");
    }
  }, []);

  return (
    <QuotesWrapper>
      <QuotesContainer>
        <QuotesIconWrapper>
          <QuotesIconLogo aria-label="running icon">
            <use href="images/icons.svg#icon-running"></use>
          </QuotesIconLogo>
        </QuotesIconWrapper>
        <QuotesTextWrapper>
          <QuotesTitleWrapper>
            <QuotesTitle>Quote of the day</QuotesTitle>
            <QuoteIcon aria-label="quotes-icon">
              <use href="images/icons.svg#icon-quotes"></use>
            </QuoteIcon>
          </QuotesTitleWrapper>
          <QuotesText>{quote}</QuotesText>
          <QuotesAuthor>{author}</QuotesAuthor>
        </QuotesTextWrapper>
      </QuotesContainer>
      <QuotesImageWrapper>
        <QuotesImage
          src="images/quote.jpg"
          alt="Personal Trainer"
          width="335"
          height="242"
          loading="lazy"
        />
      </QuotesImageWrapper>
      <QuotesInfo>
        <QuotesInfoWrapper>
          <QuotesGymIcon aria-label="dumbell-icon">
            <use href="images/icons.svg#icon-dumbbell"></use>
          </QuotesGymIcon>
        </QuotesInfoWrapper>
        <QuotesWorkoutTextWrapper>
          <QuotesWorkoutTitleWrapper>
            <QuotesWorkoutTitle>110 min</QuotesWorkoutTitle>
            <QuotesWorkoutSubTitle>Daily norm of sports</QuotesWorkoutSubTitle>
          </QuotesWorkoutTitleWrapper>
          <ReadMoreText>
            The World Health Organization recommends at least 150 minutes of
            moderate-intensity aerobic physical activity throughout the week for
            adults aged 18-64. However, what happens if we adjust that number to
            110 minutes every day? While it might seem like a high number to
            hit, dedicating 110 minutes daily to sporting activities may offer
            unparalleled benefits to physical health, mental well-being, and
            overall quality of life.
          </ReadMoreText>
        </QuotesWorkoutTextWrapper>
      </QuotesInfo>
    </QuotesWrapper>
  );
}
