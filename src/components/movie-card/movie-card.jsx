import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick }) => {
    return (
      <Card>
      {/* <Card.Img variant="top" src={movie.image} /> */}
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link" style={{ cursor: "pointer" }}>
          Open
        </Button>
      </Card.Body>
    </Card>
      // <div
      //   onClick={() => {
      //     onMovieClick(movie);
      //   }}
      // >
      //   {movie.Title}
      // </div>
    );
  };
  
  // Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Director: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};