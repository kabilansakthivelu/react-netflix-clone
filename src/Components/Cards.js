import React from "react";
import { useFetch } from "./useFetch";

const netflixOriginalsURL =
  "https://api.themoviedb.org/3/discover/tv?api_key=896c8566fc255f7c52f6ea6bd2901188&with_networks=213";
const trendingNowURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=10749";
const topRatedURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=27";
const actionMoviesURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=35";
const comedyMoviesURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=28";
const horrorMoviesURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=896c8566fc255f7c52f6ea6bd2901188&language=en-US";
const romanceMoviesURL =
  "https://api.themoviedb.org/3/trending/all/week?api_key=896c8566fc255f7c52f6ea6bd2901188&language=en-US";
const documentariesURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=99";

const Test = () => {
  const netflixOriginalsCards = useFetch(netflixOriginalsURL);
  const trendingNowCards = useFetch(trendingNowURL);
  const topRatedCards = useFetch(topRatedURL);
  const actionMoviesCards = useFetch(actionMoviesURL);
  const comedyMoviesCards = useFetch(comedyMoviesURL);
  const horrorMoviesCards = useFetch(horrorMoviesURL);
  const romanceMoviesCards = useFetch(romanceMoviesURL);
  const documentariesCards = useFetch(documentariesURL);

  return (
    <article className="bground">
      <div className="cards">
        {/* Netflix originals section */}

        <h1 className="cards-heading">NETFLIX ORIGINALS</h1>
        {netflixOriginalsCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* trending Now section */}

        <h1 className="cards-heading">Trending Now</h1>
        {trendingNowCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* Top Rated section */}

        <h1 className="cards-heading">Top Rated</h1>
        {topRatedCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* Action movies section */}

        <h1 className="cards-heading">Action Movies</h1>
        {actionMoviesCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* Comedy Movies section */}

        <h1 className="cards-heading">Comedy Movies</h1>
        {comedyMoviesCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* Horror Movies section */}

        <h1 className="cards-heading">Horror Movies</h1>
        {horrorMoviesCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* Romance Movies section */}

        <h1 className="cards-heading">Romance Movies</h1>
        {romanceMoviesCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}

        {/* Dcumentaries section */}

        <h1 className="cards-heading">Documentaries</h1>
        {documentariesCards.map((item) => {
          return (
            <img src={item.poster} alt="" className="imgg" key={item.id} />
          );
        })}
      </div>
    </article>
  );
};

export default Test;
