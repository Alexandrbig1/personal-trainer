import { v4 as uuidv4 } from "uuid";
import MuscleExercisesCards from "../MuscleExercisesCards/MuscleExercisesCards";
import {
  ExerciseCardsImage,
  ExerciseCardsInfoWrapper,
  ExerciseCardsMenu,
  ExerciseCardsText,
  ExerciseCardsTitle,
  ExerciseItem,
  CardsContainer,
} from "./InitialCard.styled";
import Pagination from "../Pagination/Pagination";
import WorkoutPagination from "../Pagination/WorkoutPagination";

export default function InitialCard({
  muscles,
  exercise,
  handleExerciseCard,
  workoutCards,
  handleWorkoutCard,
  totalPages,
  activePage,
  handlePageClick,
  handleWorkoutPageClick,
  totalWorkoutPages,
  workoutActivePage,
}) {
  return exercise ? (
    <CardsContainer>
      <ExerciseCardsMenu>
        {muscles.map((item) => (
          <ExerciseItem
            key={uuidv4()}
            id={uuidv4()}
            onClick={() => handleExerciseCard(item)}
          >
            <div>
              <ExerciseCardsImage
                src={item.imgURL}
                alt={`${muscles}-${item.name}`}
                loading="lazy"
              />
              <ExerciseCardsInfoWrapper>
                <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                <ExerciseCardsText>{item.filter}</ExerciseCardsText>
              </ExerciseCardsInfoWrapper>
            </div>
          </ExerciseItem>
        ))}
      </ExerciseCardsMenu>
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        handlePageClick={handlePageClick}
      />
    </CardsContainer>
  ) : (
    <CardsContainer>
      <MuscleExercisesCards
        workoutCards={workoutCards}
        handleWorkoutCard={handleWorkoutCard}
      />
      {workoutCards.length > 0 && (
        <WorkoutPagination
          workoutActivePage={workoutActivePage}
          handleWorkoutPageClick={handleWorkoutPageClick}
          totalWorkoutPages={totalWorkoutPages}
        />
      )}
    </CardsContainer>
  );
}
