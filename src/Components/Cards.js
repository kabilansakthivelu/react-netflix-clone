import React, { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const Cards = ({ title, classNames, id, cards }) => {
  const [arrows, setArrows] = useState("hide");

  return (
    <article className="bground">
      <div className="cards">
        <h1 className="cards-heading">{title}</h1>
        <div
          className={classNames}
          onMouseEnter={() => {
            setArrows("show");
          }}
          onMouseLeave={() => {
            setArrows("hide");
          }}
        >
          <div className="left">
            {arrows === "show" ? (
              <BiLeftArrowCircle
                className="leftArrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft -= 1200;
                }}
              />
            ) : null}
          </div>
          <div className="individualSection" id={id}>
            {cards.map((item) => {
              return (
                <img src={item.poster} alt="" className="image" key={item.id} />
              );
            })}
          </div>
          <div className="right">
            {arrows === "show" ? (
              <BiRightArrowCircle
                className="rightArrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft += 1200;
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards;
