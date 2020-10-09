import React, { useContext } from "react";
// import styled from "styled-components";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          console.log(movie);
          return <Movie movie={movie} key={movie.id} />;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
