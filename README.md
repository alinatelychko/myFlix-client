# MyFlix Movie App

Welcome to MyFlix, a web application that allows users to explore a collection of movies, manage their favorite movies, and update their user profile.

## Overview

MyFlix is a full-stack application built with React, Node.js, Express, and MongoDB. It provides features such as user authentication, profile management, and the ability to browse and interact with a catalog of movies.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **User Profile**: Users can view and update their profile information, including username, password, email, and date of birth.
- **Favorite Movies**: Users can add and remove movies from their list of favorite movies.
- **Movie Catalog**: Users can explore a catalog of movies, view movie details, and search for movies based on genre and director.

## Technologies Used

- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB Atlas

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/myflix-app.git
   cd myflix-app
Install dependencies:

`npm install`

Start the development server:

`npm start`

Open the app in your browser: http://localhost:1234

## API Endpoints

**User Endpoints:**

GET /users: Get a list of all users (requires authentication)
GET /users/:Username: Get user information by username (requires authentication)
PUT /users/:Username: Update user information (requires authentication)
DELETE /users/:Username: Delete a user account (requires authentication)

**Movie Endpoints**

GET /movies: Get a list of all movies (requires authentication)
GET /movies/:Title: Get movie details by title (requires authentication)
GET /movies/genres/:genreName: Get movies by genre (requires authentication)
GET /movies/directors/:directorName: Get movies by director (requires authentication)

**Favorite Movies Endpoints**

POST /users/:Username/movies/:MovieID: Add a movie to a user's list of favorites (requires authentication)
DELETE /users/:Username/movies/:MovieID: Remove a movie from a user's list of favorites (requires authentication)

## Documentation

The JSDoc documentation for this project is available in the docs folder. You can view it by opening the index.html file in your browser.

## Contributing

If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Submit a pull request.

## License

This project is licensed under the Your License Name - see the LICENSE file for details.



Please remember to replace placeholders such as `your-username` and customize sections based on your project's specifics. Also, ensure that your `LICENSE` file is accurate and reflects the actual license you want for your project.





