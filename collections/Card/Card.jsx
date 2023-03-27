import React from 'react'
import {
  StyledCardContainer,
  StyledCardInfo,
  StyledcardIcon,
  StyledTitle,
  StyledTextContainer
} from "./elements"

export const Card = ({ title,icon,info,variant}) => {
  return (
    <StyledCardContainer variant={variant} >
      <StyledcardIcon>{icon}</StyledcardIcon>
      <StyledTextContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCardInfo dangerouslySetInnerHTML={{ __html:  info }}/>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
