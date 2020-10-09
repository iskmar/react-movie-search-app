import React, { useContext, useState } from "react";
// import styled from "styled-components";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// import API from "../config/API";

// const SearchInput = styled.input.attrs({ placeholder: "Enter movie", onChange={props.onChange} })`
//   display: flex;
//   margin: 0 auto;
//   width: 30%;
// `;
const SearchBar = () => {
  const { movies, dispatch } = useContext(MovieContext);
  const [state, setState] = useState("");
  const handleDelete = () => {
    movies.forEach((movie) => {
      dispatch({ type: "REMOVE_MOVIES", movie: movie });
      console.log(movie);
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url =
      "https://www.omdbapi.com/?s=" + encodeURI(state) + "&apikey=a620f062";
    await axios
      .get(url)
      .then((response) => {
        const movies = response.data;
        movies.Search.map((movie) => {
          return dispatch({
            type: "FILTER_MOVIES",
            movie: {
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster,
              id: uuidv4(),
            },
          });
        });
      })
      .catch((err) => console.log(err));
    setState("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Enter movie name"
          onChange={(event) => {
            setState(event.target.value);
            handleDelete();
          }}
        />
      </form>
      {/*<input type="submit" onClick={handleDelete} />*/}
    </div>
  );
};

export default SearchBar;
