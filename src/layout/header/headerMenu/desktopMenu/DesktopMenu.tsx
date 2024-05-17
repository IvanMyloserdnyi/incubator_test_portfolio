import React from 'react';
import {S} from '../HeaderMenu_Styles';
import {Menu, MenuPropsType} from "../menu/Menu";

export const DesktopMenu:React.FC<MenuPropsType> = ({data}) => {
    return (
        <S.DesktopMenu>
            <Menu data={data}/>
        </S.DesktopMenu>
    );
};
