import React from 'react';
import mainPhoto from '../../../assets/images/main_photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => (
    <S.Main id='home'>
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
                <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={true}
                >
                    <S.PhotoWrapper>
                        <S.Photo src={mainPhoto} alt="Svetlana Dyablo photo"/>
                    </S.PhotoWrapper>
                </Tilt>
            </FlexWrapper>
        </Container>
    </S.Main>
);



