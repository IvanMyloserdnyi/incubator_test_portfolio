import React, {useState} from 'react';
import {S} from '../HeaderMenu_Styles';
import {Menu, MenuPropsType} from "../menu/Menu";

export const MobileMenu: React.FC<MenuPropsType> = ({data}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={() => setMenuIsOpen(!menuIsOpen)} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu data={data}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


