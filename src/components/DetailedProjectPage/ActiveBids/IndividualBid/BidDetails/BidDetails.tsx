import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import styled from "styled-components";

const BidDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const AmountAndDurationStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const AmountStyled = styled.div`
  display: flex;
`;
const TimeStyled = styled.div`
  display: flex;
`;
export class BidDetails extends React.PureComponent<{}> {
  static defaultProps: BidDetails["props"] = {};

  render() {
    return (
      <BidDetailsStyled>
        <AmountAndDurationStyled>
          <AmountStyled />
          <TimeStyled />
        </AmountAndDurationStyled>
        <PlainText />
      </BidDetailsStyled>
    );
  }
}
