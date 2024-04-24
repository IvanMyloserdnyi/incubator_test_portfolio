import React from 'react';
import styled from "styled-components";

export const Work:React.FC<PropsType> = ({data}) => {
    return (
        <StyledWork>
            <Image src={data.image}/>
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
            <Link>demo</Link>
            <Link>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #95c46a;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`
    
`
const Text = styled.p`
    
`
const Link = styled.a`
    
`

type PropsType = {
    data: {
        image: string
        title: string
        text: string
    }
}
