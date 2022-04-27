import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExtendedMovie } from "../models/IExtendedMovie";

export const Movie = () => {
  const [extMovie, setExtMovie] = useState<IExtendedMovie>();
  let params = useParams();

  useEffect(() => {
    axios
      .get<IExtendedMovie>(
        "http://www.omdbapi.com/?apikey=416ed51a&i=" + params.id
      )
      .then((response) => {
        setExtMovie(response.data);
      });
  }, []);

  return (
    <div>
      <h4>{extMovie?.Title}</h4>
      <span>{extMovie?.Director}</span>
      <img src={extMovie?.Poster} alt={extMovie?.Title} />
      <textarea value={extMovie?.Plot}></textarea>
      <p>{extMovie?.imdbRating}</p>
    </div>
  );
};
