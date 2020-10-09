import React from "react";
import MovieContextProvider from "./context/MovieContext";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
// import { MovieContext } from "./context/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar />
        <SearchBar />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
