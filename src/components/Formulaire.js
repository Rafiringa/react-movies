import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Formulaire = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=war&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter le titre d'un film"
            id="search-input"
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="flop-buttons">
          <button className="btn-left" id="goodToBad">
            Top <span> &#8593; </span>
          </button>
          <button className="btn-right" id="badToGood">
            <span> &#8595; </span> Flop{" "}
          </button>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
            <Card movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
};

export default Formulaire;
