import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    axios
      .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=416ed51a&s=Star")
      .then((response) => {
        setMovies(response.data.Search);
      });
  });

  return (
    <>
      {movies.map((movie) => {
        return (
          <Link to={"/movie/" + movie.imdbID}>
            <h5>{movie.Title}</h5>
            <img src={movie.Poster} alt={movie.Title} />
          </Link>
        );
      })}
    </>
  );
};
