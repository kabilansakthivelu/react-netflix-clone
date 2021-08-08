import React, { useState } from "react";
import { useFetch } from "./useFetch";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

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

  const [sectionOneArrows, setSectionOneArrows] = useState("hide");
  const [sectionTwoArrows, setSectionTwoArrows] = useState("hide");
  const [sectionThreeArrows, setSectionThreeArrows] = useState("hide");
  const [sectionFourArrows, setSectionFourArrows] = useState("hide");
  const [sectionFiveArrows, setSectionFiveArrows] = useState("hide");
  const [sectionSixArrows, setSectionSixArrows] = useState("hide");
  const [sectionSevenArrows, setSectionSevenArrows] = useState("hide");
  const [sectionEightArrows, setSectionEightArrows] = useState("hide");

  return (
    <article className="bground">
      <div className="cards">
        {/* Netflix originals section */}

        <h1 className="cards-heading">NETFLIX ORIGINALS</h1>
        <div
          id="one"
          className="individualSection"
          onMouseEnter={() => {
            setSectionOneArrows("show");
          }}
          onMouseLeave={() => {
            setSectionOneArrows("hide");
          }}
        >
          {sectionOneArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {netflixOriginalsCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionOneArrows === "show" ? (
            <BiRightArrowCircle
              className="rightArrow"
              onClick={() => {
                document.getElementById("one").scrollLeft += 1000;
              }}
            />
          ) : null}
        </div>

        {/* trending Now section */}

        <h1 className="cards-heading">Trending Now</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionTwoArrows("show");
          }}
          onMouseLeave={() => {
            setSectionTwoArrows("hide");
          }}
        >
          {sectionTwoArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {trendingNowCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionTwoArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>

        {/* Top Rated section */}

        <h1 className="cards-heading">Top Rated</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionThreeArrows("show");
          }}
          onMouseLeave={() => {
            setSectionThreeArrows("hide");
          }}
        >
          {sectionThreeArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {topRatedCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionThreeArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>

        {/* Action movies section */}

        <h1 className="cards-heading">Action Movies</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionFourArrows("show");
          }}
          onMouseLeave={() => {
            setSectionFourArrows("hide");
          }}
        >
          {sectionFourArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {actionMoviesCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionFourArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>

        {/* Comedy Movies section */}

        <h1 className="cards-heading">Comedy Movies</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionFiveArrows("show");
          }}
          onMouseLeave={() => {
            setSectionFiveArrows("hide");
          }}
        >
          {sectionFiveArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {comedyMoviesCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionFiveArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>

        {/* Horror Movies section */}

        <h1 className="cards-heading">Horror Movies</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionSixArrows("show");
          }}
          onMouseLeave={() => {
            setSectionSixArrows("hide");
          }}
        >
          {sectionSixArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {horrorMoviesCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionSixArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>

        {/* Romance Movies section */}

        <h1 className="cards-heading">Romance Movies</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionSevenArrows("show");
          }}
          onMouseLeave={() => {
            setSectionSevenArrows("hide");
          }}
        >
          {sectionSevenArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {romanceMoviesCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionSevenArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>

        {/* Dcumentaries section */}

        <h1 className="cards-heading">Documentaries</h1>
        <div
          className="individualSection"
          onMouseEnter={() => {
            setSectionEightArrows("show");
          }}
          onMouseLeave={() => {
            setSectionEightArrows("hide");
          }}
        >
          {sectionEightArrows === "show" ? (
            <BiLeftArrowCircle className="leftArrow" />
          ) : null}
          {documentariesCards.map((item) => {
            return (
              <img src={item.poster} alt="" className="image" key={item.id} />
            );
          })}
          {sectionEightArrows === "show" ? (
            <BiRightArrowCircle className="rightArrow" />
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default Test;
