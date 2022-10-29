import { Nav, NavList, NavListItem, NavItem } from "./HomePages.styled";

export const HomePage = () => {
    return <Nav>
        <NavList>
            <NavListItem>
                <NavItem to='/' end>Home1</NavItem>
            </NavListItem>
            <NavListItem>
                <NavItem to='movies'>Movies1</NavItem>
            </NavListItem>
        </NavList>
    </Nav>
}