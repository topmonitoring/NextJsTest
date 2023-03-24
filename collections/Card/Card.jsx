import React from 'react'
import {StyledCardContainer,StyledCardInfo,StyledcardIcon,StyledTitle,StyledTextContainer} from "./elements"

export const Card = ({ title,icon,info}) => {
  return (
    <StyledCardContainer>
      <StyledcardIcon>{icon}</StyledcardIcon>
      <StyledTextContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCardInfo>{info}</StyledCardInfo>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
