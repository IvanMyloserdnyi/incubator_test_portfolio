import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

export const Work: React.FC<PropsType> = ({data}) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={data.image}/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{data.title}</Title>
                <Text>{data.text}</Text>
                <Link>demo</Link>
                <Link>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {//'screen and (min-width: 1140px)'
       max-width: 540px; 
    }

`
const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
            border-radius: 0;// якщо прибирати радіус то прибрати в кнопці в компонентах
        }
    }

    &::before {
        content: '';
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(4px);

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Description = styled.div`
    padding: 25px 20px;
`
const Title = styled.h3`

`
const Text = styled.p`
    margin: 14px 0 10px;
`

type PropsType = {
    data: {
        image: string
        title: string
        text: string
    }
}
