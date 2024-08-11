# Flashcard Learning Tool

Welcome to the Flashcard Learning Tool project! This README will guide you through setting up and running the project, including both the backend and frontend components.

## Project Structure

- **Backend**: Django-based API
- **Frontend**: ReactJS-based user interface

## Prerequisites

- Python 3.x
- Node.js and npm

## Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Apply database migrations:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

3. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

## Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Accessing the Application

- **Admin Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)
  - Use this panel to manage flashcards (CRUD operations).

- **User Interface**: [http://localhost:3000](http://localhost:3000)
  - View and interact with flashcards.

## Troubleshooting

- Ensure that both backend and frontend servers are running.
- Check for any error messages in the CLI output for debugging.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

