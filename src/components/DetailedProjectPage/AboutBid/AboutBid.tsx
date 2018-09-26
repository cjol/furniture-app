import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "Styled-components";
const AboutBidStyle=styled.div`
display:flex;
flex-direction:row;
`;
const NoOfBidsStyle=styled.div``;
const AverageBidStyle=styled.div``;
const AuctionClosesStyle=styled.div``;

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
