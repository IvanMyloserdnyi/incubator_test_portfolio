import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles"

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction='column' align='center'>
                    <S.IconWrapper>
                        <Icon iconId='quote'/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    position: relative; //its for the Particles library

    min-height: 50vh;
    padding-bottom: 80px;

    ${SectionTitle} {
        margin-top: 15px;
    }

    ${S.IconWrapper} {
        margin: 25px 0 72px;
    }

`