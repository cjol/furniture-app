import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const AddBidDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const DescriptionFieldStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
`;

export class AddBidDescription extends React.PureComponent<{}> {
  static defaultProps: AddBidDescription["props"] = {};

  render() {
    return (
      <AddBidDescriptionStyle>
        <Subheading />
        <PlainText />
        <DescriptionFieldStyle>Description goes here</DescriptionFieldStyle>
      </AddBidDescriptionStyle>
    );
  }
}
