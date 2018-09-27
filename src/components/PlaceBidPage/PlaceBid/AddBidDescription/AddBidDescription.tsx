import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import { mainFont, black, greenMain } from "@style";
import styled from "styled-components";

const AddBidDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const DescriptionFieldStyle = styled.textarea`
  font-family: ${mainFont};
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  font-size: 16px;
  color: ${black};
  padding-bottom: 16px;
  border: none;
  background-color: transparent;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${greenMain};
`;

const TextContainer = styled.div`
  padding-bottom: 8px;
`;
export class AddBidDescription extends React.PureComponent<{
  description: string;
  setDescription: (s: string) => void;
}> {
  static defaultProps: AddBidDescription["props"] = {
    description:
      "Salut! Je vend de produits de grande qualite's et mes pris sont tres favorable. Je rends un service rapide et fiable pour tout mes clients. Faites moi cette chance et vous verrez les merveilles",
    setDescription: s => alert("Changing description")
  };

  render() {
    return (
      <AddBidDescriptionStyle>
        <Subheading>Bid Description</Subheading>
        <TextContainer>
          <PlainText>
            Make sure your bid gets notice. Include a description of the work
            that you’ll do and why you’re the best choice.
          </PlainText>
        </TextContainer>
        <DescriptionFieldStyle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna wirl
        </DescriptionFieldStyle>
      </AddBidDescriptionStyle>
    );
  }
}
