import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import {NotFound} from '../pages/NotFound';
//import {MovieDetails} from '../pages/MovieDetails'


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route puth="/movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
