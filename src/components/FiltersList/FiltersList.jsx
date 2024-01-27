import { v4 as uuidv4 } from "uuid";
import { FiltersListItem } from "./FiltersList.styled";

export default function FiltersList({
  categories,
  setActiveCategory,
  activeCategory,
  setCatInfo,
  setSearchQuery,
  setParams,
  setActivePage,
  setWorkoutActivePage,
  setTotalWorkoutPages,
  setTotalPages,
  setExercise,
}) {
  const handleCategories = (category) => {
    setActiveCategory(category);
    setCatInfo(false);
    setSearchQuery("");
    setParams("");
    setActivePage(1);
    setWorkoutActivePage(1);
    setExercise(true);

    if (category !== activeCategory) {
      setTotalWorkoutPages(1);
      setTotalPages(1);
    }
  };

  return categories?.map((category) => (
    <FiltersListItem
      key={uuidv4()}
      id={category}
      onClick={() => handleCategories(category)}
      $active={activeCategory === category ? activeCategory : ""}
    >
      {category}
    </FiltersListItem>
  ));
}
