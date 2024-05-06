import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu:React.FC<PropsType> = ({data}) => {
    return (
        <StyledTabMenu>
            <ul>
                {data.map((d, i) => (
                    <ListItem key={i}>
                    <Link href="#">{d}</Link>
                </ListItem>))}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`
const ListItem = styled.li`

`

type PropsType = {
    data: Array<string>
}
