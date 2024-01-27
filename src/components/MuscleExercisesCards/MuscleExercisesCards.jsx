import NoWorkoutsFound from "../NoWorkoutsFound/NoWorkoutsFound";
import {
  ExerciseArrow,
  ExerciseCardTitleName,
  ExerciseCardsInfoItem,
  ExerciseCardsInfoMenu,
  ExerciseCardsInfoText,
  ExerciseCardsInfoTextResult,
  ExerciseStarIcon,
  ExerciseTextStart,
  ExerciseWorkoutRating,
  ExerciseWorkoutText,
  ExerciseWrapperFirstLine,
  ExerciseWrapperSecondLine,
  ExerciseWrapperThirdLine,
  ExercisesItems,
  ExercisesMenuWrapper,
  WorkoutIcon,
  WorkoutIconWrapper,
} from "./MuscleExercisesCards.styled";

export default function MuscleExercisesCards({
  workoutCards,
  handleWorkoutCard,
}) {
  return (
    <>
      {workoutCards.length === 0 ? (
        <NoWorkoutsFound />
      ) : (
        <ExercisesMenuWrapper>
          {workoutCards?.map(
            ({
              _id: id,
              rating,
              name,
              burnedCalories,
              time,
              bodyPart,
              target,
            }) => (
              <ExercisesItems key={id} onClick={() => handleWorkoutCard(id)}>
                <div>
                  <ExerciseWrapperFirstLine>
                    <ExerciseWorkoutText>Workout</ExerciseWorkoutText>
                    <ExerciseWorkoutRating>
                      {Math.round(rating * 10) / 10}
                    </ExerciseWorkoutRating>
                    <ExerciseStarIcon />
                    <ExerciseTextStart>
                      Start <ExerciseArrow />
                    </ExerciseTextStart>
                  </ExerciseWrapperFirstLine>
                  <ExerciseWrapperSecondLine>
                    <WorkoutIconWrapper>
                      <WorkoutIcon />
                    </WorkoutIconWrapper>
                    <ExerciseCardTitleName>{name}</ExerciseCardTitleName>
                  </ExerciseWrapperSecondLine>
                  <ExerciseWrapperThirdLine>
                    <ExerciseCardsInfoMenu>
                      <ExerciseCardsInfoItem>
                        <ExerciseCardsInfoText>
                          Burned calories:
                        </ExerciseCardsInfoText>
                        <ExerciseCardsInfoTextResult>
                          {burnedCalories} / {time} min
                        </ExerciseCardsInfoTextResult>
                      </ExerciseCardsInfoItem>
                      <ExerciseCardsInfoItem>
                        <ExerciseCardsInfoText>
                          Body part:
                        </ExerciseCardsInfoText>
                        <ExerciseCardsInfoTextResult>
                          {bodyPart}
                        </ExerciseCardsInfoTextResult>
                      </ExerciseCardsInfoItem>
                      <ExerciseCardsInfoItem>
                        <ExerciseCardsInfoText>Target:</ExerciseCardsInfoText>
                        <ExerciseCardsInfoTextResult>
                          {target}
                        </ExerciseCardsInfoTextResult>
                      </ExerciseCardsInfoItem>
                    </ExerciseCardsInfoMenu>
                  </ExerciseWrapperThirdLine>
                </div>
              </ExercisesItems>
            )
          )}
        </ExercisesMenuWrapper>
      )}
    </>
  );
}
