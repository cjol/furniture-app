import * as React from "react";
import styled from "styled-components";
import { grey, mainFont, black } from "@style";
import { whiteButtonColor, normalBoxShadow } from "@style";

const AboutBidStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 11px;
  font-family: ${mainFont};
  flex-grow: 1;
  margin-bottom: 0px;
  margin-top: 0px;
`;
const TagStyle = styled.div`
  display: flex;
  flex-direction: row;
  background: ${whiteButtonColor};
  padding: 10px;
  box-shadow: ${normalBoxShadow};
  flex-grow: 1;
  margin: 6px;
  justify-content: center;
  min-width: 100px;
`;
const LabelStyle = styled.div`
  color: ${grey};
  margin-right: 8px;
`;
const ValueStyle = styled.div`
  font-weight: bold;
`;

export class AboutBid extends React.PureComponent<{
  numberOfBids: number;
  averageBidAmount: string;
  timeUntilEnd: string;
}> {
  static defaultProps: AboutBid["props"] = {
    numberOfBids: 15,
    averageBidAmount: "500,000UGX",
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
          <ValueStyle>{this.props.averageBidAmount}</ValueStyle>
        </TagStyle>
        <TagStyle>
          <LabelStyle>Auction Closes in :</LabelStyle>
          <ValueStyle>{this.props.timeUntilEnd}</ValueStyle>
        </TagStyle>
      </AboutBidStyle>
    );
  }
}
