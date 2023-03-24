import styled from "styled-components";
import { CardCollection } from "../../collections"; 
import dynamic from 'next/dynamic'
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionParagraph,SectioninnerHeading} from "~/components";

//const BgImage =dynamic(()=>import('../../public/img/background.png'),{ssr:false,})

export const ImageWraper = styled((props) => <div {...props} />)`
z-index: -1;
`;

export const HeroWraper = styled((props) => <div {...props} />)`
position: relative;
width: "100vw";
height: "100vh";
`;

export const HeroContent = styled((props) => <div {...props} />)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const StyledBigHeading = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  margin: auto;
  text-align: center;
`;

export const StyledSubheding = styled((props) => <SectionSubheading {...props} />)`
  margin: 0 0 1.563rem ;
  text-align: center;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
max-width: 32.03rem;
max-height: 65rem;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
margin: auto;
`;

export const StyledCardContainer= styled.div`
    display:flex;
    flex-direction: row;
`;


export const StyledCardCollection = styled(({ ...props }) => <CardCollection {...props} />)`
display:flex;
flex-direction: row;
max-width: 32.03rem;
max-height: 65rem;
width: 100%;
height: 100%;
margin-left: auto;
`;