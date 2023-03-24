import React from 'react';

import {StyledCardsContainer,StyledCard} from "./elements"
import { Card } from '../Card/Card';
import {FaClipboardList} from 'react-icons/fa';


export const CardCollection = () => {
    const cardData = [
        {
          title: 'Brief',
          icon: <FaClipboardList/>,
          info: 'Complete brief writing or simple guidance on what to include, we"ve got you covered. ',
        },
        {
          title: 'Search',
          icon: <FaClipboardList/>,
          info: 'In-depth agency search covering; criteria maching, door knocking and due-dilligence vetting',
        },
        {
          title: 'Pitch',
          icon: <FaClipboardList/>,
          info: 'Comprehancive pitch management, including comms, diary management and pitch hosting',
        },
      ];
    
      return (
        <StyledCardsContainer>
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} icon={card.icon} info={card.info} />
          ))}
        </StyledCardsContainer>
      );
  };
  