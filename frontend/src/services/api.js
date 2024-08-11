import axios from "axios";

const API_URL = "http://127.0.0.1:8000/cards/flashcards/";

// Fetch all flashcards
export const fetchFlashcards = () => axios.get(API_URL);

// Add a new flashcard (POST request)
export const addFlashcard = (newFlashcard) => axios.post(API_URL, newFlashcard);

// Update an existing flashcard (PUT request)
export const updateFlashcard = (id, updatedFlashcard) =>
  axios.put(`${API_URL}${id}/`, updatedFlashcard);

// Delete a flashcard (DELETE request)
export const deleteFlashcard = (id) => axios.delete(`${API_URL}${id}/`);
