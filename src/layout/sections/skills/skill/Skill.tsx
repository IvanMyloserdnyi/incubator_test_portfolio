import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill:React.FC<PropsType> = ({data}) => {
    return (
        <StyledSkill>
            <Icon iconId={data.iconId}/>
            <SkillTitle>{data.skillTitle}</SkillTitle>
            <SkillText>{data.skillText}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    background-color: rgba(255, 255, 255, 0.35);
`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`

type PropsType = {
    data: {
        iconId: string
        skillTitle: string
        skillText: string
    }
}
