import { useEffect, useState } from "react";
import useApiService from "../../services/apiService";
import ExerciseCards from "../ExerciseCards/ExerciseCards";
import FilterBar from "../FilterBar/FilterBar";
import Quote from "../Quote/Quote";
import {
  ExerciseCardsContainer,
  ExercisesSectionContainer,
} from "./FetchedCards.style";
import ModalCard from "../ModalCard/ModalCard";
// import Pagination from "../Pagination/Pagination";

export default function FetchedCards() {
  const {
    fetchFilters,
    fetchMuscles,
    fetchFilteredExercises,
    fetchExerciseById,
    totalPages,
    totalWorkoutPages,
    setTotalPages,
    setTotalWorkoutPages,
  } = useApiService();
  const [categories, setCategories] = useState([]);
  const [muscles, setMuscles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Body parts");
  const [maxPages, setMaxPages] = useState(null);
  const [pageCounter, setPageCounter] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [workoutActivePage, setWorkoutActivePage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [activeCard, setActiveCard] = useState("");
  const [exercise, setExercise] = useState(true);
  const [catInfo, setCatInfo] = useState(false);
  const [modalCard, setModalCard] = useState(false);
  const [workoutCards, setWorkoutCards] = useState([]);
  const [modalWorkoutCards, setModalWorkoutCards] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");
  const [musclesCard, setMusclesCard] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [params, setParams] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await fetchFilters(activePage, limit);

        // const totalPages = data.totalPages * data.perPage;

        const uniqueCategories = [
          ...new Set(data.results.map(({ filter }) => filter)),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error fetching filters:", error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchMusclesData() {
      try {
        const musclesData = await fetchMuscles(
          activeCategory,
          activePage,
          limit
        );

        setMuscles(musclesData);
        setExercise(true);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchMusclesData();
  }, [activeCategory, activePage]);

  useEffect(() => {
    async function fetchFilteredCard() {
      try {
        const cardData = await fetchFilteredExercises(
          {
            ...params,
          },
          searchQuery,
          workoutActivePage,
          limit
        );

        setWorkoutCards(cardData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchFilteredCard();
  }, [searchQuery, params, workoutActivePage]);

  async function fetchExerciseWorkoutCard(id) {
    try {
      const workoutCardById = await fetchExerciseById(id);

      setModalWorkoutCards((prevCards) => [...prevCards, workoutCardById]);
      return workoutCardById;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  function handleExerciseCard(e) {
    const cardName = e.name;
    let apiParams = {};

    switch (e.filter) {
      case "Body parts":
        setBodyPart(cardName);
        apiParams = { bodypart: cardName };
        break;
      case "Equipment":
        setEquipment(cardName);
        apiParams = { equipment: cardName };
        break;
      case "Muscles":
        setMusclesCard(cardName);
        apiParams = { muscles: cardName };
        break;
      default:
        console.log("Unknown filter:", e.filter);
        break;
    }

    setParams(apiParams);

    setExercise((prevExercise) => !prevExercise);
    setCatInfo((prevCatInfo) => !prevCatInfo);
    const activeCard = `${cardName[0].toUpperCase()}${cardName.slice(1)}`;
    setActiveCard(activeCard);
  }

  function handleWorkoutCard(id) {
    fetchExerciseWorkoutCard(id);
    setModalCard((prevModalCard) => !prevModalCard);
  }

  function handleBackdrop() {
    setModalCard((prevModalCard) => !prevModalCard);
    setModalWorkoutCards([]);
  }

  function handleSearchBar(e) {
    setSearchQuery(e);
  }

  function handlePageClick(pageNumber) {
    setActivePage(pageNumber);
  }

  function handleWorkoutPageClick(pageNumber) {
    setWorkoutActivePage(pageNumber);
  }

  return (
    <div>
      <FilterBar
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        activeCard={activeCard}
        handleExerciseCard={handleExerciseCard}
        catInfo={catInfo}
        setCatInfo={setCatInfo}
        value={searchQuery}
        handleSearchBar={handleSearchBar}
        setSearchQuery={setSearchQuery}
        setParams={setParams}
        setActivePage={setActivePage}
        setWorkoutActivePage={setWorkoutActivePage}
        setTotalWorkoutPages={setTotalWorkoutPages}
        setTotalPages={setTotalPages}
        setExercise={setExercise}
      />
      <ExercisesSectionContainer>
        <Quote />
        <ExerciseCardsContainer>
          <ExerciseCards
            muscles={muscles}
            exercise={exercise}
            handleExerciseCard={handleExerciseCard}
            workoutCards={workoutCards}
            handleWorkoutCard={handleWorkoutCard}
            activePage={activePage}
            handlePageClick={handlePageClick}
            handleWorkoutPageClick={handleWorkoutPageClick}
            totalPages={totalPages}
            totalWorkoutPages={totalWorkoutPages}
            workoutActivePage={workoutActivePage}
          />
        </ExerciseCardsContainer>
        {modalCard && (
          <ModalCard
            modalWorkoutCards={modalWorkoutCards}
            modalCard={modalCard}
            handleBackdrop={handleBackdrop}
          />
        )}
      </ExercisesSectionContainer>
    </div>
  );
}
