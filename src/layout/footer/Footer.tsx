import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

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
    min-height: 30vh;
    background-color: #248f49;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 15px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    text-decoration: none;
`
const Copyright = styled.small`

`