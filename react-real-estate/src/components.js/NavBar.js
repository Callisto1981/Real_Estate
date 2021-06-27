import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';

const Nav = styled.nav`
    height: 60px;
    background: blue;
`;

const Logo = styled(Link)`
    color: #fff;
`;

const MenuBars =styled.i``;

const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)`
    
`;

export const NavBar = () => {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index) => {
                    <NavMenuLinks to ={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                })}
            </NavMenu>
            <h1>NavBar</h1>
        </Nav>
    )
}
