import * as React from "react";
import styled from "styled-components";

const AboutBidStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const NoOfBidsStyle = styled.div``;
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
        <NoOfBidsStyle />
        <AverageBidStyle />
        <AuctionClosesStyle />
      </AboutBidStyle>
    );
  }
}
