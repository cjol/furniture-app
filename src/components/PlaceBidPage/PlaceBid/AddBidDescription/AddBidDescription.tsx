import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const AddBidDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionFeildStyle = styled.div`
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
        <DescriptionFeildStyle>
          Make sure your bid is submitted by describing what you will do and why
          you are the best choice.
        </DescriptionFeildStyle>
      </AddBidDescriptionStyle>
    );
  }
}
