import FiltersList from "../FiltersList/FiltersList";
import {
  FilterBarContainer,
  FilterBarWrapper,
  FilterBarTitle,
  FilterBarCategory,
  FiltersWrapper,
  FilterBarDivide,
  SearchWrapper,
  SearchInput,
  SearchButton,
  SearchIcon,
  FiltersMenu,
} from "./FilterBar.styled";

export default function FilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  activeCard,
  catInfo,
  setCatInfo,
  setSearchQuery,
  handleSearchBar,
  setParams,
  setActivePage,
  setWorkoutActivePage,
  setTotalWorkoutPages,
  setTotalPages,
  setExercise,
}) {
  return (
    <FilterBarContainer>
      <FilterBarWrapper>
        <FilterBarTitle>
          Exercises
          {catInfo && (
            <FilterBarCategory>
              <FilterBarDivide>/</FilterBarDivide>
              {activeCard}
            </FilterBarCategory>
          )}
        </FilterBarTitle>
        <FiltersWrapper>
          {catInfo && (
            <SearchWrapper>
              <SearchInput
                name="search"
                type="text"
                placeholder="Search"
                onChange={(e) => handleSearchBar(e.target.value)}
              />
              <SearchButton type="button">
                <SearchIcon />
              </SearchButton>
            </SearchWrapper>
          )}
          <FiltersMenu>
            <FiltersList
              categories={categories}
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
              setCatInfo={setCatInfo}
              setSearchQuery={setSearchQuery}
              setParams={setParams}
              setActivePage={setActivePage}
              setWorkoutActivePage={setWorkoutActivePage}
              setTotalWorkoutPages={setTotalWorkoutPages}
              setTotalPages={setTotalPages}
              setExercise={setExercise}
            />
          </FiltersMenu>
        </FiltersWrapper>
      </FilterBarWrapper>
    </FilterBarContainer>
  );
}
