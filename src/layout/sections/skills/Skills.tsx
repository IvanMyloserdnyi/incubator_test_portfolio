import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

const skillsData = [
    {
        iconId: 'code',
        skillTitle: 'html5',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {iconId: 'css',
        skillTitle: 'css3',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {iconId: 'react',
        skillTitle: 'React',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {iconId: 'typeScript',
        skillTitle: 'TypeScript',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {iconId: 'styledComponents',
        skillTitle: 'Styled Components',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {iconId: 'figma',
        skillTitle: 'Web Design',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }
]
export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap='wrap' justify='space-between'>
                {skillsData.map(d => (<Skill key={d.iconId} data={d}/>))}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #4dbeb1;
    min-height: 100vh;
`