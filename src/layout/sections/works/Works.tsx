import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialNetworkImage from '../../../assets/images/work_social-network.jpg'
import timerHoverImage from '../../../assets/images/work_timer.jpg'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';
import {TabMenu} from "./tabMenu/TabMenu";


const menuItems : MenuItemsType = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    }
]
const worksItems = [
    {
        image: socialNetworkImage,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa'
    },
    {
        image: timerHoverImage,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react'
    }
]
export const Works:React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<StatusType>('all')
    let filteredWorks
    if (currentFilterStatus === 'all') {
        filteredWorks = worksItems
    }
    else {
        filteredWorks = worksItems.filter(work => work.type === currentFilterStatus)
    }

    function changeFilterStatus(value:StatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id='works'>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu data={menuItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus} />
                <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
                    {filteredWorks.map((data,index) => <Work key={index} data={data}/>)}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

export type StatusType = 'all' | 'landing' | 'react' | 'spa'
export type MenuItemsType = Array<{ title: string, status: StatusType }>
