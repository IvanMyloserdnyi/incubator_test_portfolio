import React from 'react';
import mainPhoto from '../../../assets/images/main_photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => (
    <S.Main>
        <Container>
            <FlexWrapper align='center' justify='space-around' wrap='wrap'>
                <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I am a <span>Svetlana Dyablo</span></S.Name>
                    <S.MainTitle>
                        <p>A Web Developer</p>
                        <Typewriter
                            options={{
                                strings: ['A Web Developer', 'A Frontend Developer', 'A Web Designer'],
                                autoStart: true,
                                loop: true,
                                delay: 70
                            }}
                        />
                    </S.MainTitle>
                </div>
                <S.PhotoWrapper>
                    <S.Photo src={mainPhoto} alt="Svetlana Dyablo photo"/>
                </S.PhotoWrapper>
            </FlexWrapper>
        </Container>
    </S.Main>
);



