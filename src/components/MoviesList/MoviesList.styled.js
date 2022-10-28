import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 10px;
`;

export const ListItem = styled.li``;

export const ListItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 300px;
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
