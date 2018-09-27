import * as React from "react";
import styled from "styled-components";
import { grey, mainFont, black } from "@style";

const AboutBidStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 11px;
  font-family: ${mainFont};
`;
const TagStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const LabelStyle = styled.div`
  color: ${grey};
`;
const ValueStyle = styled.div`
  font-weight: bold;
`;

export class AboutBid extends React.PureComponent<{
  numberOfBids: number;
  averageBidTime: string;
  timeUntilEnd: string;
}> {
  static defaultProps: AboutBid["props"] = {
    numberOfBids: 15,
    averageBidTime: "20 minutes",
    timeUntilEnd: "40 minutes"
  };

  render() {
    return (
      <AboutBidStyle>
        <TagStyle>
          <LabelStyle>Number of bids: </LabelStyle>
          <ValueStyle>{this.props.numberOfBids}</ValueStyle>
        </TagStyle>
        <TagStyle>
          <LabelStyle>Average Bid: </LabelStyle>
          <ValueStyle>{this.props.averageBidTime}</ValueStyle>
        </TagStyle>
        <TagStyle>
          <LabelStyle>Auction Closes in :</LabelStyle>
          <ValueStyle>{this.props.timeUntilEnd}</ValueStyle>
        </TagStyle>
      </AboutBidStyle>
    );
  }
}
