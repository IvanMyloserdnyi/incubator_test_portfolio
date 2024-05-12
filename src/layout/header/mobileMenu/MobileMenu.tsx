import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu: React.FC<PropsType> = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={isOpen}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};

            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                transition: 0.4s;
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};

            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: rotate(45deg) translateY(0);
                transition: 0.4s;
            `}
        }
    }
`
const Link = styled.a`
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: transparent;
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.90);
    display: none;


    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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
        transition: 0.3s; //можливо доведеться прибрати

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};
            transition: 0.3s; //можливо доведеться прибрати

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`
type PropsType = {
    data: Array<string>
}
