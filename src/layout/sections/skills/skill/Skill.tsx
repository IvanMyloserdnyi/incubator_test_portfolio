import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_Styles';

export const Skill:React.FC<PropsType> = ({data}) => {
    return (
        <S.Skill>
            <FlexWrapper direction='column' align='center'>
                <S.IconWrapper>
                    <Icon iconId={data.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{data.skillTitle}</S.SkillTitle>
                <S.SkillText>{data.skillText}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

type PropsType = {
    data: {
        iconId: string
        skillTitle: string
        skillText: string
    }
}
