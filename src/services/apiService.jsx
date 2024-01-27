import axios from "axios";
import { useState } from "react";

const API_BASE_URL = "https://your-energy.b.goit.study/api/";

const http = axios.create({
  baseURL: API_BASE_URL,
});

export default function useApiService() {
  const [totalPages, setTotalPages] = useState(1);
  const [totalWorkoutPages, setTotalWorkoutPages] = useState(1);

  async function fetchMuscles(filter, activePage, limit) {
    const URL = `filters?filter=${filter}&page=${activePage}&limit=${limit}`;
    try {
      const response = await http.get(URL);
      setTotalPages(response?.data?.totalPages);
      return response?.data?.results;
    } catch (error) {
      console.error("Error fetching muscles:", error);
      throw error;
    }
  }

  async function fetchExercise(pageCounter, limit) {
    const URL = `exercises?page=${pageCounter}&limit=${limit}`;
    try {
      const response = await http.get(URL);

      console.log(response);
      return response?.data;
    } catch (error) {
      console.error("Error fetching Exercise:", error);
      throw error;
    }
  }

  async function fetchFilters(activePage, limit) {
    const URL = `filters?page=${activePage}&limit=${limit}`;
    try {
      const response = await http.get(URL);
      return response?.data;
    } catch (error) {
      console.error("Error fetching filters:", error);
      throw error;
    }
  }

  async function fetchExerciseById(exerciseId) {
    const URL = `exercises/${exerciseId}`;
    try {
      const response = await http.get(URL);
      return response?.data;
    } catch (error) {
      console.error("Error fetching ExerciseById:", error);
      throw error;
    }
  }

  async function fetchQuote() {
    const URL = `quote`;
    try {
      const response = await http.get(URL);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async function fetchFilteredExercises(
    params,
    searchQuery,
    pageCounter,
    limit
  ) {
    const bodyPart = params?.bodypart;
    const equipment = params?.equipment;
    const muscles = params?.muscles;
    const URL = `exercises?bodypart=${bodyPart || ""}&muscles=${
      muscles || ""
    }&equipment=${
      equipment || ""
    }&keyword=${searchQuery}&page=${pageCounter}&limit=${limit}`;
    try {
      const response = await http.get(URL);
      setTotalWorkoutPages(response?.data?.totalPages);
      return response?.data?.results;
    } catch (error) {
      console.error("Error fetching FilteredExercises:", error);
      throw error;
    }
  }

  return {
    fetchMuscles,
    fetchExercise,
    fetchFilters,
    fetchExerciseById,
    fetchQuote,
    fetchFilteredExercises,
    totalPages,
    totalWorkoutPages,
    setTotalWorkoutPages,
    setTotalPages,
  };
}
