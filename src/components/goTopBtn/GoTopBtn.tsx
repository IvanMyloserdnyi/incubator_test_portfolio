import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn && <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                <Icon iconId='arrowGoTop' height='15' width='16' viewBox='7 7 16 15'/>
            </StyledGoTopBtn>}
        </>
    )
        ;
};

const StyledGoTopBtn = styled.button`
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    right: 30px;
    bottom: 30px;
`