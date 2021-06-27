import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = styled.nav`
    height: 60px;
    background: blue;
`;

const Logo = styled(Link)`
    color: #fff;
`;

const MenuBars =styled.i``;

const NavMenu = styled.div``;

export const NavBar = () => {
    return (
        <Nav>
            <Logo>ELIXR</Logo>
            <MenuBars/>
            <NavMenu>

            </NavMenu>
            <h1>NavBar</h1>
        </Nav>
    )
}
