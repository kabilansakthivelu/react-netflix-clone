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
    let num = -1;
    const posterPath = array.map((item) => {
      num += 1;
      return {
        key: num,
        poster: "https://image.tmdb.org/t/p/original" + item.poster_path,
        id: item.id,
        name: item.original_title || item.original_name,
        description: item.overview,
        backDrop: "https://image.tmdb.org/t/p/original" + item.backdrop_path,
        releaseDate: item.first_air_date || item.release_date,
        rating: item.vote_average,
      };
    });
    setImages(posterPath);
  }, [array]);

  return images;
};
