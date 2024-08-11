import React, { useState, useEffect } from "react";
import { fetchFlashcards } from "../../services/api";
import "./Flashcard.css"; // Import the CSS file for styling

const Flashcard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    fetchFlashcards()
      .then((response) => setFlashcards(response.data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div className="flashcard-container">
      <h1 className="flashcard-title">Flashcard Learning Tool</h1>
      {flashcards.length > 0 && (
        <>
          <div
            className={`flashcard ${flipped ? "flipped" : ""}`}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <h2 className="flashcard-hint">Click me for hint </h2>
                <p>{flashcards[currentIndex].question}</p>
              </div>
              <div className="flashcard-back">
                <p>{flashcards[currentIndex].answer}</p>
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button className="button" onClick={handlePrevious}>
              Previous
            </button>
            <button className="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Flashcard;
