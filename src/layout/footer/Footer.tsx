import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {S} from './Footer_Styles';
import {GoTopBtn} from "../../components/goTopBtn/GoTopBtn";

const footerData = ['instagram', 'telegram', 'vk', 'linkedin']
export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <S.Name>Svetlana</S.Name>
                <S.SocialList>
                    {footerData.map((d, i) => (
                        <S.SocialItem key={i}>
                            <S.SocialLink>
                                <Icon height='21' width='21' viewBox='0 0 21 21' iconId={d}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    ))}
                </S.SocialList>
            <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
        </S.Footer>
    );
};

