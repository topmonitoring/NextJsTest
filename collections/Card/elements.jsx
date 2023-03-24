// Styled elements for the Card go here
import styled, { css } from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionParagraph,} from "~/components";

export const StyledcardIcon = styled.div`
  background-color: transparent;
  width: 45px;
  height: 45px;
  align-self: center;
  svg{
    width: 100%;
    height: 100%;
  }
`;

export const StyledTitle = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  color: black;
  text-align: left;
  font-weight: 500; //loks bold
`;

export const StyledTextContainer = styled(({ ...props }) => <SectionContainer {...props} />)`
  color: black;
  width: 80%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

export const StyledCardInfo = styled.p`
  display: flex;
  flex-direction: row;
  text-align: left;
  background-color: transparent;
  @media screen and (max-width: 1024px) {
    width: 60vw;
    margin: auto;
  }
`;

export const StyledCardContainer = styled.div`
  padding: 30px 30px;
  display: flex;
  flex-direction: row;
  align-content: center;
  background-color: #8080803b;
  border-radius: 10px;
  margin: 20px ;
  border-style: solid;
  border-color: transparent;
  :hover{
    cursor: pointer;
    border-color: #1544dfdc;
    h3{
      color: #1544dfdc;
      text-decoration: underline;
    }
  }
  `;
