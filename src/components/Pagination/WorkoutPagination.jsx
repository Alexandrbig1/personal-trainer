import {
  WorkoutPaginationWrapper,
  WorkoutPaginationButton,
} from "./WorkoutPagination.styled";

export default function WorkoutPagination({
  totalWorkoutPages,
  workoutActivePage,
  handleWorkoutPageClick,
}) {
  const displayPages = 7;
  const pagesToShow = Math.min(displayPages, totalWorkoutPages);

  const getStartIndex = () => {
    const middle = Math.floor(displayPages / 2);
    const start = Math.max(1, workoutActivePage - middle);
    return Math.min(totalWorkoutPages - pagesToShow + 1, start);
  };

  const startPage = getStartIndex();

  return (
    totalWorkoutPages > 1 && (
      <WorkoutPaginationWrapper>
        {Array.from({ length: pagesToShow }, (_, i) => (
          <WorkoutPaginationButton
            key={startPage + i}
            onClick={() => handleWorkoutPageClick(startPage + i)}
            $active={startPage + i === workoutActivePage}
          >
            {startPage + i}
          </WorkoutPaginationButton>
        ))}
      </WorkoutPaginationWrapper>
    )
  );
}
