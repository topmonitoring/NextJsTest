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