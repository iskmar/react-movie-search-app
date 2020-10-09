//img.omdbapi.com/?apikey=[yourkey]&
import React, { useContext } from "react";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";

const { movies } = useContext(MovieContext);
export default axios.create({
  baseURL: "http://www.omdbapi.com/?t=",
});
const url =
  "https://www.omdbapi.com/?t=" + encodeURI(state) + "&apikey=a620f062";
