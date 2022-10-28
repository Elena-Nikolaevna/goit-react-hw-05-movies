import { MovieList, MovieListItem, MovieListItemLink } from './TrendingMovieList.syled';


export const TrendingMovieList = ({ movies, link, state }) => {
    return (
        <MovieList>
            {movies.map(movie => {
                const {id, title} = movie;
                return (
                    link ? 
                        <MovieListItem key={id}>
                            <MovieListItemLink to={`${link}${id}`} state={state}>{title}</MovieListItemLink>
                        </MovieListItem>
                    :
                        <MovieListItem key={id}>
                            <MovieListItemLink to={`${id}`} state={state}>{title}</MovieListItemLink>
                        </MovieListItem> 
                )
                })}

        </MovieList>)
}