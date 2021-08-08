import React, { useEffect } from "react";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useFetch } from "./useFetch";

const Teaser = () => {
  const teaserCard = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=35"
  );
  const num = Math.floor(Math.random() * 20);
  const teaserArray = teaserCard.filter((item) => {
    return item.key === num;
  });

  return (
    <article>
      {teaserArray.map((item) => {
        return (
          <div
            key={item.key}
            className="teaser-image"
            style={{
              backgroundImage: `url(${item.backDrop})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="teaser-content">
              <h1 className="teaser-title">{item.name}</h1>
              <button className="teaser-play-button">
                <FaPlay />
                &nbsp; Play
              </button>
              <button className="teaser-more-info-button">
                {" "}
                <FiInfo /> &nbsp; More Information
              </button>
              <p className="teaser-desc">{item.description}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Teaser;
