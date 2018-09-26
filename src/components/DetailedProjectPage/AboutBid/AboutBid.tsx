import * as React from "react";
import styled from "styled-components";
import { grey, mainFont, black } from "@style";

const AboutBidStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  font-family: ${mainFont};
  text-decoration: underline;
`;
const NoOfBidsStyle = styled.div``;
const LabelStyle = styled.div`
  color: ${grey};
`;
const ValueStyle = styled.div`
  color: ${black};
`;
const AverageBidStyle = styled.div``;
const AuctionClosesStyle = styled.div``;

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
        <NoOfBidsStyle>
          <LabelStyle>Number of bids:</LabelStyle>
          <ValueStyle>7</ValueStyle>
        </NoOfBidsStyle>
        <AverageBidStyle>
          <LabelStyle>Average Bid:</LabelStyle>
          <ValueStyle>500,000UGX</ValueStyle>
        </AverageBidStyle>
        <AuctionClosesStyle>
          <LabelStyle>Auction Closes in:</LabelStyle>
          <ValueStyle>7days</ValueStyle>
        </AuctionClosesStyle>
      </AboutBidStyle>
    );
  }
}
