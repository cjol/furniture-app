import * as React from "react";
import styled from "styled-components";

const AboutBidStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const NoOfBidsStyle = styled.div``;
const AverageBidStyle = styled.div``;
const AuctionClosesStyle = styled.div``;

export class AboutBid extends React.PureComponent<{}> {
  static defaultProps: AboutBid["props"] = {};

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
