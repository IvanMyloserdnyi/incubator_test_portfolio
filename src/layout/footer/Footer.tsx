import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

const footerData = ['instagram', 'telegram', 'vk', 'linkedin']
export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Svetlana</Name>
                <SocialList>
                    {footerData.map((d, i) => (
                        <SocialItem key={i}>
                            <SocialLink>
                                <Icon height='21' width='21' viewBox='0 0 21 21' iconId={d}/>
                            </SocialLink>
                        </SocialItem>
                    ))}
                </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
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