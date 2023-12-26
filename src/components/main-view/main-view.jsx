import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { ProfileFavoritesView } from "../profile-favorites-view/profile-favorites-view";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = ({ onUserUpdate, onDeregister})  => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState(null);

  const handleFavoriteToggle = (movieId) => {
    fetch(`https://movieapicf-30767e813dee.herokuapp.com/user/${user._id}/favorites/${movieId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`Error toggling favorite for movie with ID ${movieId}. Status: ${response.status}`);
          return response.json(); // Attempt to parse and log the response body
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data or log it for further inspection
        console.log('Toggle favorite response:', data);
        setFavoriteMovies(data.favoriteMovies);
      })
      .catch((error) => console.error(`Error toggling favorite for movie with ID ${movieId}:`, error));
  };
  

  const handleUserUpdate = (updatedUser) => {
    // Implement logic to update user information (e.g., make a request to the /users endpoint)
    console.log("Updating user:", updatedUser);
    // Call a function to update the user information
    onUserUpdate(updatedUser);
  };

  const handleDeregister = () => {
    // Implement logic to deregister the user (e.g., make a request to the /deregister endpoint)
    console.log("Deregistering user:", user);
    // Call a function to deregister the user
    onDeregister();
  };


  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://movieapicf-30767e813dee.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Genre: {
                Name: movie.Genre.Name
            },
            Director: {
                Name: movie.Director.Name
            }
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);


  // return (
  //   <Row >
  //  { !user ? (
  //     <Col md={5}>
  //       <LoginView
  //         onLoggedIn={(user, token) => {
  //           setUser(user);
  //           setToken(token);
  //         }}
  //       />
  //       or
  //       <SignupView />
  //     </Col>
  //     ) : selectedMovie ? (
  //   <Col className="justify-content-md-center">
  //     <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  //   </Col>
  // ) : movies.length === 0 ? (
  //    <div>The list is empty!</div>
  // ): (
  //   <div>
  //     <Button 
  //     onClick={() => { 
  //       setUser(null); 
  //       setToken(null); 
  //       localStorage.clear();
  //       }}       
  //       variant="outline-secondary">Logout</Button>

  //     {movies.map((movie) => (
  //      <Col className="mb-5" key={movie._id} md={3}>
  //      <MovieCard
  //         key={movie._id}
  //         movie={movie}
  //         onMovieClick={(newSelectedMovie) => {
  //           setSelectedMovie(newSelectedMovie);
  //         }}
  //       />
  //       </Col>
  //     ))}
  //   </div>
   
  // )}
  // </Row>
  // )}


  return (
    <BrowserRouter>
     <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user, token) => {setUser(user);  setToken(token);}} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView 
                    movies={movies} 
                    onFavoriteToggle={handleFavoriteToggle}/>
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                     <Col className="mb-4" key={movie._id} md={3}>
                     <MovieCard movie={movie} onFavoriteToggle={handleFavoriteToggle} />
                   </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
          <Route
          path="/profile"
          element={
            <ProfileView
              user={user}
              onUserUpdate={handleUserUpdate}
              onDeregister={handleDeregister}
            />
          }
        />
        <Route
            path="/profile/favorites"
            element={
              <ProfileFavoritesView
                user={user}
                onFavoriteToggle={handleFavoriteToggle}
              />
            }
          />
      </Routes>
      </Row>
    </BrowserRouter>
  );
};