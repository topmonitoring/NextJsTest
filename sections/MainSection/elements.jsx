import styled from "styled-components";
import { CardCollection } from "../../collections"; 
import {  SectionBigHeading, SectionSubheading} from "~/components";
//import dynamic from 'next/dynamic'
//const BgImage =dynamic(()=>import('../../public/img/background.png'),{ssr:false,})

export const ImageWraper = styled((props) => <div {...props} />)`
z-index: -1;
`;

export const HeroWraper = styled((props) => <div {...props} />)`
position: relative;
height: 100vh;
@media screen and (max-width: 1024px) {
  min-height: fit-content;
  }
`;

export const HeroContent = styled((props) => <div {...props} />)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
align-self: center;
`;

export const StyledBigHeading = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  margin: auto;
  text-align: center;
  align-self: center;
  @media screen and (max-width: 1024px) {
   font-size :1.5rem ;
  }
`;

export const StyledSubheding = styled((props) => <SectionSubheading {...props} />)`
  margin: 0 0 1.563rem ;
  text-align: center;
  align-self: center;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
max-width: 32.03rem;
max-height: 65rem;
display: flex;
flex-direction: column;
width: 30vw;
height: 100%;
margin: auto;
padding: 10px 50px;
:hover{
    cursor: pointer;
}
@media screen and (max-width: 1024px) {
    width: 70vw;
  }  
`;

export const StyledCardContainer= styled.div`
    display:flex;
    flex-direction: row;
    width: 60vw;
    @media screen and (max-width: 1024px) {
    flex-direction: column;
  }    
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