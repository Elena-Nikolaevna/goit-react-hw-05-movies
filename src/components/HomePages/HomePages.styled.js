import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    margin-top: 20px;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color:  #b3e6ff; 
    box-shadow: 2px 1px 0px 1px rgba(0.1, 0.1, 0.1, 0.1);
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

export const NavListItem = styled.li`
    margin-right: 20px;
    
`;

export const NavItem = styled(NavLink)`
    border-radius: 5px;
    
    padding: 4px 10px;
    text-decoration: none;
    font-size: 20px;
    color: darkblue;
    
    &.active {
        background-color: lightskyblue; 
        color: white
        
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: red;
    }
`;