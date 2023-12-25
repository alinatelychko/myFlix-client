import Button from "react-bootstrap/Button";
export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        {/* <div>
          <img src={movie._id} />
        </div> */}
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.Description}</span>
        </div>
        <div>
          <span>Author: </span>
          <span>{movie.Director.Name}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.Genre.Name}</span>
        </div>
        <Button onClick={onBackClick} variant="primary"  style={{ cursor: "pointer" }}>Back</Button>
      </div>
    );
  };

  