import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const menuData = ['Home','Skills','Works','Testimony','Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu data={menuData}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #4dbeb1;
    display: flex;
    justify-content: space-between;
`
