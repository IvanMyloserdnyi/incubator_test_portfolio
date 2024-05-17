import React from 'react';
import mainPhoto from '../../../assets/images/main_photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align='center' justify='space-around' wrap='wrap'>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am a <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A Web Developer</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={mainPhoto} alt="Svetlana Dyablo photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


