import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import NavigationBar  from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import  ProfileFavoritesView  from "../profile-favorites-view/profile-favorites-view";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Button, Form} from "react-bootstrap";

export const MainView = ({ onUserUpdate, onDeregister})  => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesBeforeSearch, setMoviesBeforeSearch] = useState([]);

  useEffect(() => {
    if (user) {
      setFavoriteMovies(user.FavoriteMovies || []);
    }
  }, [user]);

  // const [selectedMovie, setSelectedMovie] = useState(null);

  const handleFavoriteToggle = (movieId) => {

    const url = `https://movieapicf-30767e813dee.herokuapp.com/users/${user.Username}/movies/${movieId}`;
  
    // Check if the movie is already in favorites
    const isFavorite = favoriteMovies.includes(movieId);

  
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
      .then((updatedUser) => {

        setFavoriteMovies(updatedUser.FavoriteMovies || []);
      })
      .catch((error) => {
        console.error(`Error toggling favorite for movie with ID ${movieId}:`, error);
      });
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
          setMoviesBeforeSearch(moviesFromApi);
      });
  }, [token]);


    const handleSearch = async (query, token) => {
        // search moviesBeforeSearch for query for similiarity on title and set the filtered movies to movies
        const filteredMovies = moviesBeforeSearch.filter((movie) => {
            return movie.Title.toLowerCase().includes(query.toLowerCase());
        });
        setMovies(filteredMovies);
    };



  return (
    <BrowserRouter>
   <NavigationBar
        user={user}
        onLoggedOut={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.open('/', '_self');
        }}

        token={token}  // 'token' prop to NavigationBar
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

                  <Row className="mb-4 mt-2">
                      <Col ></Col>
                      <Col ></Col>
                      <Col>
                          <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery); }}>
                              <Form.Control
                                  type="search"
                                  placeholder="Search"
                                  className="me-2"
                                  aria-label="Search"
                                  onChange={(e) => setSearchQuery(e.target.value)}
                              />
                              <Button type="submit" variant="outline-success">
                                  Search
                              </Button>
                          </Form>
                      </Col>
                  </Row>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>



<Row>
                    {movies.map((movie) => (
                     <Col className="mb-4"  key={movie._id} md={3}>
                     <MovieCard

                                                movie={movie}
                                                onFavoriteToggle={
                                                    handleFavoriteToggle
                                                }
                                                favoriteMovies={
                                                    favoriteMovies
                                                }
                                            />
                   </Col>
                    ))}
</Row>
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
      token={token} // Make sure to pass the token prop
    />
  }
/>
      </Routes>
      </Row>
    </BrowserRouter>
  );
};