import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    position: relative; //its for the Particles library
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    fMax: 22,
    fMin: 16
})}
    letter-spacing: 3px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.10);
    width: 35px;
    height: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.animations.transition};
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
        background-color: ${theme.colors.accent};
        transition: 0.2s;
    }
`
const Copyright = styled.small`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
`
export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}
