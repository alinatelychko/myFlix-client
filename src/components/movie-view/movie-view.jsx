

import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

/**
 * React component for displaying detailed movie information.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.movies - An array of movie objects.
 * @param {Function} props.onFavoriteToggle - Callback function triggered on favorite toggle.
 * @returns {JSX.Element} The MovieView component.
 */

export const MovieView = ({ movies, onFavoriteToggle }) => {
  const { movieId } = useParams();
  const decodedMovieId = decodeURIComponent(movieId);
  const movie = movies.find((b) => b._id === decodedMovieId);

  // If movie is not found, or if it's undefined, handle it accordingly
  // if (!movie) {
  //   return <div>Movie not found!</div>;
  // }

    // Debug logging
  console.log("movieId:", movieId);
  console.log("movies:", movies);
  console.log("movie:", movie);

    return (
      <div>
        {/* <div>
          <img src={movie.image} />
        </div> */}
         <div>
        <span>Title: </span>
        <span>{movie.Title || "No Title"}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description || "No Description"}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director?.Name || "No Director"}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre?.Name || "No Genre"}</span>
      </div>

        <Link to={`/`}>
        <Button className="back-button" variant="primary"  style={{ cursor: "pointer" }}>Back</Button>
      </Link>
      <Button
        variant="outline-primary"
        style={{ cursor: "pointer" }}
        onClick={() => onFavoriteToggle(movie._id)}
      >
        {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
      </div>
    );
  };

  MovieView.propTypes = {
    movies: PropTypes.array.isRequired,              // Array of movie objects
    onFavoriteToggle: PropTypes.func.isRequired,     // Function to toggle favorite status
  };