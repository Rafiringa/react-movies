import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Formulaire = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("war");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="flop-buttons">
          <button
            className="btn-left"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top <span> &#8593; </span>
          </button>
          <button
            className="btn-right"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop <span> &#8595; </span>
          </button>
        </div>
      </div>
      <div className="result">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default Formulaire;
