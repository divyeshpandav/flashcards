import React, { useState, useEffect } from "react";
import { fetchFlashcards } from "../../services/api";
import Flashcard from "../user/Flashcard";
import "./FlashcardContainer.css"; // Import CSS for styling

const FlashcardContainer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    fetchFlashcards()
      .then((response) => setFlashcards(response.data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowHint(false); // Hide hint when navigating
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
    setShowHint(false); // Hide hint when navigating
  };

  const handleHint = () => {
    setShowHint((prev) => !prev); // Toggle hint visibility
  };

  return (
    <div className="flashcard-container">
      <h1 className="title">Flashcard Learning Tool</h1>
      {flashcards.length > 0 && (
        <div className="flashcard-content">
          <Flashcard flashcard={flashcards[currentIndex]} showHint={showHint} />
          <div className="navigation-buttons">
            <button className="nav-button" onClick={handlePrevious}>
              Previous
            </button>
            <button className="nav-button" onClick={handleHint}>
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>
            <button className="nav-button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardContainer;
