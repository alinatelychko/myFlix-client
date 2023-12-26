import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onFavoriteToggle }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="primary" style={{ cursor: "pointer" }}> Open </Button>
        </Link>
        <Button
          variant="outline-primary"
          style={{ cursor: "pointer" }}
          onClick={() => onFavoriteToggle(movie._id)}
        >
          {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string
    })
  }).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};
