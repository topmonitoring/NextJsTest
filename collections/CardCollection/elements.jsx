import styled from "styled-components";
import {Card} from "../Card"

export const StyledCardsContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: transparent;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 60vw;
    margin: auto;
  }
  `;

export const StyledCard = styled(({ ...props }) => <Card{...props} />)`
margin: auto;
`;