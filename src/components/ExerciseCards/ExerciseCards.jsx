import InitialCard from "../InitialCard/InitialCard";
import { ExerciseCardsContainer } from "./ExerciseCards.styled";

export default function ExerciseCards({
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
  return (
    <ExerciseCardsContainer>
      <InitialCard
        muscles={muscles}
        exercise={exercise}
        handleExerciseCard={handleExerciseCard}
        workoutCards={workoutCards}
        handleWorkoutCard={handleWorkoutCard}
        totalPages={totalPages}
        activePage={activePage}
        handlePageClick={handlePageClick}
        handleWorkoutPageClick={handleWorkoutPageClick}
        totalWorkoutPages={totalWorkoutPages}
        workoutActivePage={workoutActivePage}
      />
    </ExerciseCardsContainer>
  );
}
