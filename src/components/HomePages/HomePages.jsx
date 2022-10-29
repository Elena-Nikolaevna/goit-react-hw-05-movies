import { Nav, NavList, NavListItem, NavItem } from "./HomePages.styled";

export const HomePage = () => {
    return <Nav>
        <NavList>
            <NavListItem>
                <NavItem to='/' end>Home </NavItem>
            </NavListItem>
            <NavListItem>
                <NavItem to='movies'>Movies </NavItem>
            </NavListItem>
        </NavList>
    </Nav>
}