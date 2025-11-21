import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div>
          <span>Genres: </span>
          {movie.genres.map((genre, index) => (
            <span key={genre}>
              {genre}{index < movie.genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
