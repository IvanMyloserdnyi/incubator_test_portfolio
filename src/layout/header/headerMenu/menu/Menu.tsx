import React from 'react';
import { S } from '../HeaderMenu_Styles';

export const Menu: React.FC<MenuPropsType> = ({data}) => {
    return (
        <ul>
            {data.map((d, i) => (<S.MenuItem key={i}>
                <S.Link href="#">
                    {d}
                    <S.Mask>
                        <span>{d}</span>
                    </S.Mask>
                    <S.Mask>
                        <span>{d}</span>
                    </S.Mask>
                </S.Link>
            </S.MenuItem>))}
        </ul>
    );
};


export type MenuPropsType = {
    data: Array<string>
}