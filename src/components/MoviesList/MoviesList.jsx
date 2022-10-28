import PropTypes from 'prop-types';
import { List, ListItem, ListItemLink } from './MoviesList.styled';

export const MoviesList = ({ movies, link, state }) => {
    return (
        <List>
            {movies.map(movie => {
                const {id, title} = movie;
                return (
                    link ? 
                        <ListItem key={id}>
                            <ListItemLink to={`${link}${id}`} state={state}>{title}</ListItemLink>
                        </ListItem>
                    :
                        <ListItem key={id}>
                            <ListItemLink to={`${id}`} state={state}>{title}</ListItemLink>
                        </ListItem> 
                )
                })}

        </List>)
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    link: PropTypes.string,
    state: PropTypes.object,
}