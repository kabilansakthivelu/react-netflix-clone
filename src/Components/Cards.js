import React, { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import Modal from "react-modal";

const Cards = ({ title, classNames, id, cards }) => {
  const [arrows, setArrows] = useState("hide");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalvalues, setModalValues] = useState([]);

  const modalOpenCall = (
    movieName,
    description,
    backDrop,
    rating,
    releaseDate,
    id
  ) => {
    const obj = {
      movieName,
      description,
      backDrop,
      rating,
      releaseDate,
      id,
    };
    const modalArray = [];
    modalArray.push(obj);
    setModalValues(modalArray);
    setIsModalOpen(true);
  };

  return (
    <article>
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
                <img
                  src={item.poster}
                  alt=""
                  className="image"
                  key={item.id}
                  onClick={() => {
                    modalOpenCall(
                      item.name,
                      item.description,
                      item.backDrop,
                      item.rating,
                      item.releaseDate,
                      item.id
                    );
                  }}
                />
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

      <Modal
        style={{
          overlay: {
            backgroundColor: "revert",
          },
          content: {
            width: "50%",
            margin: "5% 20% 10% 20%",
            minHeight: "500px",
            backgroundColor: "black",
            borderRadius: "10px",
            position: "relative",
            borderColor: "revert",
          },
        }}
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      >
        {modalvalues.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={movie.backDrop}
                alt="moviePoster"
                width="100%"
                height="450px"
                className="modalImage"
              />
              <FaWindowClose
                className="modalCloseButton"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              />
              <h1 className="modalContents">{movie.movieName}</h1>
              <p className="modalContents">{movie.description}</p>
              <p className="modalContents">
                <span className="modal-sub-headings">Rating:</span>{" "}
                {movie.rating}
              </p>
              <p className="modalContents">
                <span className="modal-sub-headings">Release Date:</span>
                {movie.releaseDate}
              </p>
            </div>
          );
        })}
      </Modal>
    </article>
  );
};

export default Cards;
