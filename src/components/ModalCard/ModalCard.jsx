import { useEffect } from "react";
import StarRating from "../StarRating/StarRating";
import {
  BackdropContainer,
  CloseModalIcon,
  ExerciseModalRatingMenu,
  ExercisesDescription,
  ExercisesDetailName,
  ExercisesDetailValue,
  ExercisesDetailsMenu,
  ExercisesModalTitle,
  ModalExerciseWrapper,
  ModalExercisesContentWrapper,
  ModalExercisesImageWrapper,
  ModalExercisesImg,
} from "./ModalCard.styled";

export default function ModalCard({
  modalWorkoutCards,
  modalCard,
  handleBackdrop,
}) {
  function capitalizeFirstLetter(str) {
    if (typeof str !== "string") {
      return str;
    }

    const words = str.split(" ");
    const upperCaseFirstLetter = words.map((word) => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    });

    return upperCaseFirstLetter.join(" ");
  }

  function formatNumber(number) {
    if (number % 1 === 0) {
      return Math.floor(number);
    } else {
      return number;
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      handleBackdrop();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return modalWorkoutCards.map(
    ({
      _id: id,
      gifUrl,
      name,
      rating,
      bodyPart,
      equipment,
      popularity,
      burnedCalories,
      time,
      description,
    }) => (
      <BackdropContainer $modalCard={modalCard} key={id}>
        <ModalExerciseWrapper>
          <CloseModalIcon onClick={handleBackdrop} />
          <ModalExercisesImageWrapper>
            <ModalExercisesImg src={gifUrl} alt={name} />
          </ModalExercisesImageWrapper>
          <ModalExercisesContentWrapper>
            <div>
              <ExercisesModalTitle>
                {capitalizeFirstLetter(name)}
              </ExercisesModalTitle>
              <ExerciseModalRatingMenu>
                <StarRating
                  maxRating={5}
                  rating={
                    rating !== undefined && formatNumber(rating.toFixed(1))
                  }
                  value={
                    rating !== undefined && formatNumber(rating.toFixed(1))
                  }
                />
              </ExerciseModalRatingMenu>
              <ExercisesDetailsMenu>
                <li>
                  <ExercisesDetailName>Body Part</ExercisesDetailName>
                  <ExercisesDetailValue>
                    {capitalizeFirstLetter(bodyPart)}
                  </ExercisesDetailValue>
                </li>
                <li>
                  <ExercisesDetailName>Equipment</ExercisesDetailName>
                  <ExercisesDetailValue>
                    {capitalizeFirstLetter(equipment)}
                  </ExercisesDetailValue>
                </li>
                <li>
                  <ExercisesDetailName>Rating</ExercisesDetailName>
                  <ExercisesDetailValue>
                    {formatNumber(rating.toFixed(1))}
                  </ExercisesDetailValue>
                </li>
                <li>
                  <ExercisesDetailName>Popular</ExercisesDetailName>
                  <ExercisesDetailValue>{popularity}</ExercisesDetailValue>
                </li>
                <li>
                  <ExercisesDetailName>Burned Calories</ExercisesDetailName>
                  <ExercisesDetailValue>
                    {burnedCalories} / {time} min
                  </ExercisesDetailValue>
                </li>
              </ExercisesDetailsMenu>
              <ExercisesDescription>{description}</ExercisesDescription>
            </div>
          </ModalExercisesContentWrapper>
        </ModalExerciseWrapper>
      </BackdropContainer>
    )
  );
}
