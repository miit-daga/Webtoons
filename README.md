# Webtoon Project

This project is a full-stack web application that allows users to manage characters and webtoons. The frontend is built with React using Vite, and the backend is built with Node.js and Express.

This is the GitHub repo: [Webtoons](https://github.com/miit-daga/Webtoons)

## Project Structure

- **webtoon-frontend**: Contains the frontend code for the web application.
- **webtoon-backend**: Contains the backend code for the API.

## Features

- Add, retrieve, and manage characters.
- User-friendly interface for managing webtoons and characters.
- Responsive design with modern UI components.

## Technologies Used

- **Frontend**: React, Axios, CSS, Vite
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB

## Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/) (or access to a MongoDB Atlas cluster)
- Git (for cloning the repository)

### Cloning the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/miit-daga/Webtoons.git
   cd Webtoons

### Setting Up the Backend

1. Navigate to the backend directory:
   ```bash
   cd webtoon-backend
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `webtoon-backend` directory and add the following environment variables:
   ```
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   node app.js
   ```

### Setting Up the Frontend

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd ../webtoon-frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `webtoon-frontend` directory and add the following environment variable:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the frontend application:
   ```bash
   npm run dev
   ```

### Accessing the Application

Once both the backend and frontend servers are running, you can access the web application by navigating to `http://localhost:5173` in your web browser.
