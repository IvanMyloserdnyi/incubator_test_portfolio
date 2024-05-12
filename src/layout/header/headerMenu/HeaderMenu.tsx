import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu:React.FC<PropsType> = ({data}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {data.map((d, i) => (<ListItem key={i}>
                    <Link href="#">
                        {d}
                        <Mask>
                            <span>{d}</span>
                        </Mask>
                        <Mask>
                            <span>{d}</span>
                        </Mask>
                    </Link>
                </ListItem>))}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
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
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const Link = styled.a`
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accent};
    
    & + & {
       top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        transition: 0.3s;//можливо доведеться прибрати

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
    }
    
    &:hover {
        &::before{
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};
            transition: 0.3s;//можливо доведеться прибрати
            
            & + ${Mask}  {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`
type PropsType = {
    data: Array<string>
}
