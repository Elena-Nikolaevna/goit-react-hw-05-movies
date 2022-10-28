import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/api";
import { CastList, CastListItem } from './Cast.styled';

const BASE_PHOTO_URL = "https://image.tmdb.org/t/p/w200/";

export const Cast = () => {
    const {movieId} = useParams();
    const [castInfo, setCastInfo] = useState([]);

    useEffect(() => {
        getMovieCast(movieId).then(setCastInfo);
    }, [movieId]);

    if (castInfo.length === 0) {
        return null;
    }

    return (
        <CastList>
            {castInfo.map(actor => {
                const {name, character, profile_path, id} = actor;

                return <CastListItem key={id}>
                    <img src={BASE_PHOTO_URL + profile_path} alt={name}/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </CastListItem>
            })}
        </CastList>
    )
}