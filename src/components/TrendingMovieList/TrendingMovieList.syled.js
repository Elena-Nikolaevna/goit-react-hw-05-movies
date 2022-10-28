import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 10px;
`;

export const MovieListItem = styled.li``;

export const MovieListItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 300px;
  height: 25px;
  margin-top: 5px;
  background-color: #cceeff;
  padding: 5px;
  color: black;
  :hover,
  :focus {
    background-color: #1ab2ff;
    color: white;
    text-shadow: 1px blue;
  }
`;
