import React from 'react';
import {StyledCardsContainer,StyledCard} from "./elements"


export const CardCollection = ({cardData}) => {
      return (
        <StyledCardsContainer>
          {cardData.map((card, index) => (
            <StyledCard key={index} title={card.title} icon={card.icon} info={card.info} width={card.width} variant={card.variant}/>
          ))}
        </StyledCardsContainer>
      );
  };
  