import React from 'react'
import {
  StyledImageContainer,
  StyledCardCollection,
  StyledCardContainer,
  StyledSubheding,
  StyledBigHeading,
  HeroWraper,
  ImageWraper,
  HeroContent
} from "./elements"
import Image from 'next/image'

export const MainSection=({BigTitle,SmallTitle,image,bgimage,title,icon,info,cardData,...props})=>{
  return (
  
    <HeroWraper>
    <ImageWraper>
    <Image layout="fill" src={bgimage.src} alt={image.alt} width={image.width} height={image.height}  />
    <HeroContent>
    <StyledBigHeading>{BigTitle}</StyledBigHeading>
    <StyledSubheding>{SmallTitle}</StyledSubheding>
    <StyledCardContainer >
    <StyledImageContainer>
      <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
      <StyledCardCollection cardData={cardData}/>
    </StyledCardContainer>
    </HeroContent>
    </ImageWraper>
    </HeroWraper>
    
  )
}

