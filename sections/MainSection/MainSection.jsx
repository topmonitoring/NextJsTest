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
import {FaClipboardList,FaSearch,FaPeopleArrows} from 'react-icons/fa';

const cardData = [
  {
    title: 'Brief',
    icon: <FaClipboardList/>,
    info: '<p> Complete <strong> brief writing or simple guidance </strong> on what to include, we"ve got you covered. </p>',
    variant:"small"
   
  },
  {
    title: 'Search',
    icon: <FaSearch/>,
    info: '<p>In-depth agency search covering; <strong> criteria maching</strong>, door knocking and due-dilligence vetting</p>',
    variant:"medium"

  },
  {
    title: 'Pitch',
    icon: <FaPeopleArrows/>,
    info: '<p>Comprehancive <strong>pitch management</strong>, including comms, diary management and pitch hosting</p>',
    variant:"big"
    
  },
];

export const MainSection=({BigTitle,SmallTitle,image,bgimage,title,icon,info,...props})=>{
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

