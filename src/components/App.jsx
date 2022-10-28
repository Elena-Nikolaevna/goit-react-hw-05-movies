import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from "react";
//import styled from 'styled-components';
//import { Home } from '../pages/Home';
//import { Movies } from '../pages/Movies';
//import { NotFound } from '../pages/NotFound';
import { Container } from './App.styled';
import { Layout } from "./Layout/Layout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));

//import {MovieDetails} from '../pages/MovieDetails'

/* const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`; */

export const App = () => {
  return (
    <Container>
     {/*  <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header> */}

<Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='movies/:movieId' element={<MovieDetails />}> 
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
    </Container>
  );
};
