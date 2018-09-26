import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { ActiveBidImage } from "./ActiveBidImage/ActiveBidImage";
import { BidDetails } from "./BidDetails/BidDetails";
import styled from "styled-components";

const IndividualBidStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export class IndividualBid extends React.PureComponent<{
  activeBidImage: string;
}> {
  static defaultProps: IndividualBid["props"] = {
    activeBidImage: "www.tyrohq.com/logo.png"
  };

  render() {
    return (
      <IndividualBidStyle>
        <ActiveBidImage />
        <BidDetails />
        <RectangularButton>SELECT</RectangularButton>
      </IndividualBidStyle>
    );
  }
}
