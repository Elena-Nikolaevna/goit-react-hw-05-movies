import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieWrap = styled.section`
    display: flex;
    padding: 20px;
    border-bottom: 1px grey solid;
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
`;

export const ButtonBack = styled(Link)`
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  color: darkblue;
    &:hover {
      color: blue;
    }
`;

export const MovieTitle = styled.h2`
  margin: 26px 0;
`;

export const AdditionalWrap = styled.section`
`;

export const AdditionalText = styled.h3`
  margin-left: 20px;
`;

export const AdditionalList = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 20px;
`;

export const ListItem = styled.li`
margin-left: 20px;
`;

export const ListItemLink = styled(Link)`
    border-radius: 10px;
    text-decoration: none;
    font-size: 18px;
    color: darkblue;
    :hover,
    :focus {
        color: blue;
    }
`;