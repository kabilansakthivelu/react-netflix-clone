import Header from "./Components/Header";
import Teaser from "./Components/Teaser";
import Cards from "./Components/Cards";
import { useFetch } from "../src/Components/useFetch";

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
  "https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=27";

function App() {
  const netflixOriginalsCards = useFetch(netflixOriginalsURL);
  const trendingNowCards = useFetch(trendingNowURL);
  const topRatedCards = useFetch(topRatedURL);
  const actionMoviesCards = useFetch(actionMoviesURL);
  const comedyMoviesCards = useFetch(comedyMoviesURL);
  const horrorMoviesCards = useFetch(horrorMoviesURL);
  const romanceMoviesCards = useFetch(romanceMoviesURL);
  const documentariesCards = useFetch(documentariesURL);

  return (
    <div className="App">
      <Header />

      <Teaser />

      <div className="contentCards">
        {/* NETFLIX ORIGINALS */}
        <Cards
          title="NETFLIX ORIGINALS"
          classNames="section1"
          id="one"
          cards={netflixOriginalsCards}
        />
        {/* Trending Now */}
        <Cards
          title="Trending Now"
          classNames="section2"
          id="two"
          cards={trendingNowCards}
        />
        {/* Top Rated */}
        <Cards
          title="Top Rated"
          classNames="section3"
          id="three"
          cards={topRatedCards}
        />
        {/* Action Movies */}
        <Cards
          title="Action Movies"
          classNames="section4"
          id="four"
          cards={actionMoviesCards}
        />
        {/* Comedy Movies */}
        <Cards
          title="Comedy Movies"
          classNames="section5"
          id="five"
          cards={comedyMoviesCards}
        />
        {/* Horror Movies */}
        <Cards
          title="Horror Movies"
          classNames="section6"
          id="six"
          cards={horrorMoviesCards}
        />
        {/* Romance Movies */}
        <Cards
          title="Romance Movies"
          classNames="section7"
          id="seven"
          cards={romanceMoviesCards}
        />
        {/* Documentaries */}
        <Cards
          title="Documentaries"
          classNames="section8"
          id="eight"
          cards={documentariesCards}
        />
      </div>
    </div>
  );
}

export default App;
