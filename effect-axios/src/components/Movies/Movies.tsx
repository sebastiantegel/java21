// Hämta data - fetch
// fetch('url'): Promise<Response>

// fetch('url')
//  .then((response) => response.json())
//  .then((data) => { console.log(data); });

// Verb: GET, POST, PUT, DELETE - CRUD-operationer genom http-anrop

// Axios är ett tredjepartsverktyg.
// Axios behöver installeras -> npm i axios

// import axios from 'axios'

// axios.get
// axios.post
// axios.put
// axios.delete

// axios.get<T>('url'): Promise<AxiosReponse>

// axios.get<IMovie[]>('http://...')
//   .then(response => { response.data })

// key = 416ed51a
// http://www.omdbapi.com/?apikey=416ed51a&s=Star

// IMovie - Title, Year, Poster

import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import { IOmdbResponse } from "../../models/IOmdbResponse";
import "./Movies.css";

export function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (movies.length !== 0) return;

    axios
      .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=416ed51a&s=Star")
      .then((response) => {
        setMovies(response.data.Search);
      });
  });

  let moviesHtml = movies.map((movie) => {
    return (
      <div key={movie.imdbID} className="movie-container">
        <h3>{movie.Title}</h3>
        <div className="img-container">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    );
  });

  return <div className="movies">{moviesHtml}</div>;
}
