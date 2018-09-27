import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import { mainFont } from "@style";
import styled from "styled-components";

const AddBidDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const DescriptionFieldStyle = styled.textarea`
  font-family: ${mainFont};
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
`;

export class AddBidDescription extends React.PureComponent<{
  description: string;
}> {
  static defaultProps: AddBidDescription["props"] = {
    description:
      "Salut! Je vend de produits de grande qualite's et mes pris sont tres favorable. Je rends un service rapide et fiable pour tout mes clients. Faites moi cette chance et vous verrez les merveilles"
  };

  render() {
    return (
      <AddBidDescriptionStyle>
        <Subheading>Bid Description</Subheading>
        <PlainText>Description instructions go here</PlainText>
        <DescriptionFieldStyle>Description goes here</DescriptionFieldStyle>
      </AddBidDescriptionStyle>
    );
  }
}
