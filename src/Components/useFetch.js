import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [array, setArray] = useState([]);
  const [images, setImages] = useState([]);

  const fetchCards = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res1) => {
        setArray(res1.results);
      });
  };

  useEffect(() => {
    fetchCards();
  }, [url]);

  useEffect(() => {
    const posterPath = array.map((item) => {
      return {
        key: item.id,
        poster: "https://image.tmdb.org/t/p/original" + item.poster_path,
        id: item.id,
      };
    });
    setImages(posterPath);
  }, [array]);

  return images;
};
