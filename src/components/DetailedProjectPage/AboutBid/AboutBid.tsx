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
          <ValueStyle>7</ValueStyle>
        </TagStyle>
        <TagStyle>
          <LabelStyle>Average Bid: </LabelStyle>
          <ValueStyle>500,000UGX</ValueStyle>
        </TagStyle>
        <TagStyle>
          <LabelStyle>Auction Closes in :</LabelStyle>
          <ValueStyle>7 days</ValueStyle>
        </TagStyle>
      </AboutBidStyle>
    );
  }
}
