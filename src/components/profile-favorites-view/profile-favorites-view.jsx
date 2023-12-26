import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const ProfileFavoritesView = ({ user, onFavoriteToggle }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Fetch the user's favorite movies (adjust the API endpoint accordingly)
    fetch(`https://movieapicf-30767e813dee.herokuapp.com/user/${user._id}/favorites`,)
      .then((response) => response.json())
      .then((data) => {
        setFavoriteMovies(data.favoriteMovies);
      })
      .catch((error) => console.error("Error fetching favorite movies:", error));
  }, [user._id]);

  const handleToggle = (movieId) => {
    console.log("Toggling favorite for movie ID:", movieId);
    // Update the state locally
    setFavoriteMovies((prevMovies) =>
      prevMovies.map((movie) => ({
        ...movie,
        isFavorite: movie._id === movieId ? !movie.isFavorite : movie.isFavorite,
      }))
    );

    // Propagate the toggle to the parent component
    onFavoriteToggle(movieId);
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div>
          {favoriteMovies.map((movie) => (
            <Card key={movie._id} style={{ width: "18rem", marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleToggle(movie._id)}
                >
                  {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
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
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};
