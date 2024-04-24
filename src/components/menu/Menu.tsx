import React from 'react';
import styled from "styled-components";

export const Menu:React.FC<PropsType> = ({data}) => {
    return (
        <StyledMenu>
            <ul>
                {data.map((d, i) => (<li key={i}>
                    <a href="#">{d}</a>
                </li>))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
    a {
        text-decoration:  none;
    }
    li {
        list-style:  none;
    }
`

type PropsType = {
    data: Array<string>
}
