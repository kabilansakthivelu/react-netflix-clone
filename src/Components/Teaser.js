import React from "react";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const Teaser = () => {
  return (
    <article>
      <div className="teaser-image">
        <div className="teaser-content">
          <h1 className="teaser-title">Title of the movie</h1>
          <button className="teaser-play-button">
            <FaPlay />
            &nbsp; Play
          </button>
          <button className="teaser-more-info-button">
            {" "}
            <FiInfo /> &nbsp; More Information
          </button>
          <p className="teaser-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At iusto,
            recusandae temporibus consequuntur explicabo odio. Voluptatum unde
            minima impedit vero?
          </p>
        </div>
      </div>
    </article>
  );
};

export default Teaser;
