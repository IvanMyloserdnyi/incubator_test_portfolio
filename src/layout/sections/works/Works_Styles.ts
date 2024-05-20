import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Works = styled.section`
    position: relative; //its for the Particles library

    ${FlexWrapper} {
        gap: 30px;
    }
`

//Work
const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.desktop} {
        //'screen and (min-width: 1140px)'
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
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};

        &::before {
            width: 100%;
            height: 100%;
            border-radius: 0; // якщо прибирати радіус то прибрати в кнопці в компонентах
        }
    }

    &::before {
        content: '';
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(1px);

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        transition: ${theme.animations.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
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

//Tab menu
const TabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid red;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li`

`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
    TabMenu,
    ListItem
}