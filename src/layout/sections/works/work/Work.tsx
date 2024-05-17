import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles';

export const Work: React.FC<PropsType> = ({data}) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={data.image}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{data.title}</S.Title>
                <S.Text>{data.text}</S.Text>
                <Link active>demo</Link>
                <Link>code</Link>
            </S.Description>
        </S.Work>
    );
};

type PropsType = {
    data: {
        image: string
        title: string
        text: string
    }
}
