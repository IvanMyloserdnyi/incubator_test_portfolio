import React from 'react';
import {Link} from "../../../../components/Link";
import {S} from '../Works_Styles';
import {MenuItemsType, StatusType} from "../Works";

export const TabMenu:React.FC<TabMenuPropsType> = ({data, changeFilterStatus, currentFilterStatus}) => {
    return (
        <S.TabMenu>
            <ul>
                {data.map((d, i) => (
                    <S.ListItem key={i}>
                    <Link active={currentFilterStatus === d.status} as={'button'} onClick={() => changeFilterStatus(d.status)}>{d.title}</Link>
                </S.ListItem>))}
            </ul>
        </S.TabMenu>
    );
};



export type TabMenuPropsType = {
    data: MenuItemsType
    changeFilterStatus: (value:StatusType) => void,
    currentFilterStatus: StatusType
}
