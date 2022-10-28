import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { TrendingMovieList } from "components/TrendingMovieList/TrendingMovieList";
import { HomeTitle } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
      getTrendingMovies().then(setTrendingMovies);
  }, []);
  
  return <section>
      <HomeTitle>Trending today</HomeTitle>
      <TrendingMovieList movies={trendingMovies} link={`movies/`}/>
  </section>
}

export default Home;
  