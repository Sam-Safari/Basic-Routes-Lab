import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
