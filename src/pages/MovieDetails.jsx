import { useEffect, useState} from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "services/api";
import {MovieWrap, InfoContainer, ButtonBack, MovieTitle, AdditionalWrap, AdditionalText,
AdditionalList, ListItem, ListItemLink } from './MovieDetails.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const location = useLocation();
    const backLink = location?.state?.from ?? '/';

    useEffect(() => {
    getMovieDetails(movieId).then(setMovieInfo);  
    }, [movieId]);

    if (Object.keys(movieInfo).length === 0) {
        return null;
    }

    const {vote_average, title, overview, genres, poster_path, release_date} = movieInfo;
    const posterLink = BASE_POSTER_URL + poster_path;
    const userScore = parseInt(vote_average * 10);
    const genresInfo = genres.map(a => a.name).join(" ");
    const releaseYear = release_date.split('-')[0];

    return (<>
        <MovieWrap>
            <div>
                <ButtonBack to={backLink}>Go Back</ButtonBack>
                <img src={posterLink} alt={title} />
            </div>
            <InfoContainer>
                <MovieTitle>{title} ({releaseYear})</MovieTitle>
                <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genresInfo}</p>
            </InfoContainer>
        </MovieWrap>
        <AdditionalWrap>
        <AdditionalText>Additional information</AdditionalText>
        <AdditionalList>
            <ListItem>
            <ListItemLink to='cast' state={location.state}>Cast</ListItemLink>
            </ListItem>
            <ListItem>
            <ListItemLink to='reviews' state={location.state}>Reviews</ListItemLink>
            </ListItem>
        </AdditionalList>
        </AdditionalWrap>
        <Outlet />
    </>
    )
}

export default MovieDetails;