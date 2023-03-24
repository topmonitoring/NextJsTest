import React from 'react';
import {StyledCardsContainer,StyledCard} from "./elements"
import {FaClipboardList,FaSearch,FaPeopleArrows} from 'react-icons/fa';

export const CardCollection = () => {
    const cardData = [
        {
          title: 'Brief',
          icon: <FaClipboardList/>,
          info: 'Complete brief writing or simple guidance on what to include, we"ve got you covered. ',
        },
        {
          title: 'Search',
          icon: <FaSearch/>,
          info: 'In-depth agency search covering; criteria maching, door knocking and due-dilligence vetting',
        },
        {
          title: 'Pitch',
          icon: <FaPeopleArrows/>,
          info: 'Comprehancive pitch management, including comms, diary management and pitch hosting',
        },
      ];
    
      return (
        <StyledCardsContainer>
          {cardData.map((card, index) => (
            <StyledCard key={index} title={card.title} icon={card.icon} info={card.info} />
          ))}
        </StyledCardsContainer>
      );
  };
  