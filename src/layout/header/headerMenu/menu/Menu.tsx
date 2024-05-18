import React from 'react';
import { S } from '../HeaderMenu_Styles';

//const menuData = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

const menuData = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Testimony',
        href: 'testimony'
    },
    {
        title: 'Contact',
        href: 'contact'
    }]
export const Menu: React.FC = () => {
    return (
        <ul>
            {menuData.map((item, index) => (<S.MenuItem key={index}>
                <S.NavLink
                    activeClass='active'
                    spy={true}
                    offset={-15}
                    to={item.href}
                    smooth={true}>
                    {item.title}
                    <S.Mask>
                        <span>{item.title}</span>
                    </S.Mask>
                    <S.Mask>
                        <span>{item.title}</span>
                    </S.Mask>
                </S.NavLink>
            </S.MenuItem>))}
        </ul>
    );
};


export type MenuPropsType = {
    data: Array<string>
}