import React, { useState, useEffect } from "react";
import {
  addFlashcard,
  updateFlashcard,
  deleteFlashcard,
  fetchFlashcards,
} from "../../services/api";
import "./AdminDashboard.css"; // Add CSS for table styling

const AdminDashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    question: "",
    answer: "",
  });
  const [editFlashcard, setEditFlashcard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchFlashcards()
      .then((response) => setFlashcards(response.data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleAddFlashcard = () => {
    addFlashcard(newFlashcard)
      .then((response) => {
        setFlashcards((prev) => [...prev, response.data]);
        setNewFlashcard({ question: "", answer: "" });
      })
      .catch((error) => console.error("Error adding flashcard:", error));
  };

  const handleUpdateFlashcard = (id) => {
    updateFlashcard(id, editFlashcard)
      .then((response) => {
        setFlashcards((prev) =>
          prev.map((fc) => (fc.id === id ? response.data : fc))
        );
        setEditFlashcard(null);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating flashcard:", error));
  };

  const handleDeleteFlashcard = (id) => {
    deleteFlashcard(id)
      .then(() => {
        setFlashcards((prev) => prev.filter((fc) => fc.id !== id));
      })
      .catch((error) => console.error("Error deleting flashcard:", error));
  };

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="form-container">
        <h3>{isEditing ? "Edit Flashcard" : "Add Flashcard"}</h3>
        <input
          className="form-input"
          type="text"
          placeholder="Question"
          value={isEditing ? editFlashcard?.question : newFlashcard.question}
          onChange={(e) =>
            isEditing
              ? setEditFlashcard({ ...editFlashcard, question: e.target.value })
              : setNewFlashcard({ ...newFlashcard, question: e.target.value })
          }
        />
        <input
          className="form-input"
          type="text"
          placeholder="Answer"
          value={isEditing ? editFlashcard?.answer : newFlashcard.answer}
          onChange={(e) =>
            isEditing
              ? setEditFlashcard({ ...editFlashcard, answer: e.target.value })
              : setNewFlashcard({ ...newFlashcard, answer: e.target.value })
          }
        />
        <button
          className="form-button"
          onClick={() =>
            isEditing
              ? handleUpdateFlashcard(editFlashcard.id)
              : handleAddFlashcard()
          }
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <div className="table-container">
        <h3>Flashcards List</h3>
        <table className="flashcard-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flashcards.map((flashcard) => (
              <tr key={flashcard.id}>
                <td>{flashcard.question}</td>
                <td>{flashcard.answer}</td>
                <td>
                  <button
                    className="action-button edit-button"
                    onClick={() => {
                      setEditFlashcard(flashcard);
                      setIsEditing(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => handleDeleteFlashcard(flashcard.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
