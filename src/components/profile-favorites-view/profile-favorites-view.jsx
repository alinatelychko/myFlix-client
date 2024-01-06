import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ProfileFavoritesView = ({ user, token }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the user's favorite movies
    fetch(`https://movieapicf-30767e813dee.herokuapp.com/users/${user.Username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoriteMovies(data.FavoriteMovies || []); // Ensure it is an array
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
      });

    // Fetch all movies
    fetch("https://movieapicf-30767e813dee.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Genre: {
              Name: movie.Genre.Name,
            },
            Director: {
              Name: movie.Director.Name,
            },
          };
        });

        setMovies(moviesFromApi);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [user.Username, token]);

  const handleToggle = (movieId) => {
    const url = `https://movieapicf-30767e813dee.herokuapp.com/users/${user.Username}/movies/${movieId}`;

    // Determine if the movie is already in favorites
    const isFavorite = favoriteMovies.some((movie) => movie === movieId);

    // Use the appropriate method based on whether it's adding or removing
    const method = isFavorite ? "DELETE" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoriteMovies(data.FavoriteMovies || []);
      })
      .catch((error) => {
        console.error(`Error toggling favorite for movie with ID ${movieId}:`, error);
      });
  };

  // Filter movies to display only favorites
  const favoriteMoviesToShow = movies.filter((movie) => favoriteMovies.includes(movie._id));

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMoviesToShow.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div>
          {favoriteMoviesToShow.map((movie) => (
            <Card key={movie._id} style={{ width: "18rem", marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Button variant="primary" onClick={() => handleToggle(movie._id)}>
                  Remove from Favorites
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

ProfileFavoritesView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

export default ProfileFavoritesView;
