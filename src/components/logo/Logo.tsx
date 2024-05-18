import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => (
        <a onClick={() => scroll.scrollToTop()}>
            <Icon iconId='code'/>
        </a>
    );

