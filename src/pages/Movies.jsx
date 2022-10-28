import { MoviesSearchForm } from "../components/MoviesSearchForm/MoviesSearchForm";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMovieOnSearch } from "services/api";
import { MoviesList } from "components/MoviesList/MoviesList";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        const fetchMoviesBySearch = async () => {
            const data = await getMovieOnSearch(searchQuery).then(response => response).catch(error => console.log(error));
            setMovies(data)
        };
    if(searchQuery) {
        fetchMoviesBySearch();
    }}, [searchQuery]);

    const onSubmit = (search) => {
        setSearchParams(search !== "" ? {search} : {})
    };
   
    return <section>
        <MoviesSearchForm onSubmit={onSubmit}/>
        {movies && <MoviesList movies={movies} state={{from: location}}/>}
    </section>
}

export default Movies;