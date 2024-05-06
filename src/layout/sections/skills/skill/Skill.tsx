import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

export const Skill:React.FC<PropsType> = ({data}) => {
    return (
        <StyledSkill>
            <FlexWrapper direction='column' align='center'>
                <IconWrapper>
                    <Icon iconId={data.iconId}/>
                </IconWrapper>
                <SkillTitle>{data.skillTitle}</SkillTitle>
                <SkillText>{data.skillText}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`
export const IconWrapper = styled.div`
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.10);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`

type PropsType = {
    data: {
        iconId: string
        skillTitle: string
        skillText: string
    }
}
