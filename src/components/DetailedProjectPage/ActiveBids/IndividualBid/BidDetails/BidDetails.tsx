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
  flex-direction: row;

  font-size: 16px;
`;
const AmountStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const TimeStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export class BidDetails extends React.PureComponent<{
  amount: string;
  time: string;
  description: string;
}> {
  static defaultProps: BidDetails["props"] = {
    amount: "250000 UGX",
    time: "14 days",
    description: "Fred Blogs"
  };

  render() {
    return (
      <BidDetailsStyled>
        <AmountAndDurationStyled>
          <AmountStyled>Amount</AmountStyled>
          <TimeStyled>Time</TimeStyled>
        </AmountAndDurationStyled>
        <PlainText>Bidder Name</PlainText>
      </BidDetailsStyled>
    );
  }
}
