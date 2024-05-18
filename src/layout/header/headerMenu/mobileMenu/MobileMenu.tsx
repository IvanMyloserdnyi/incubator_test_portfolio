import React, {useState} from 'react';
import {S} from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={() => setMenuIsOpen(!menuIsOpen)} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


