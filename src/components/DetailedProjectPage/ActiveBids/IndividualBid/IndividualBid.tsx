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
  padding: 16px;
`;

export class IndividualBid extends React.PureComponent<{
  activeBidprops: ActiveBidImage["props"];
  bidProps: BidDetails["props"];
  rectangularButton: (id: string) => void;
  id: string;
}> {
  static defaultProps: IndividualBid["props"] = {
    activeBidprops: ActiveBidImage.defaultProps,
    bidProps: BidDetails.defaultProps,
    rectangularButton: id => alert("Select"),
    id: "100"
  };

  render() {
    return (
      <IndividualBidStyle>
        <ActiveBidImage {...this.props.activeBidprops} />
        <BidDetails {...this.props.bidProps} />
        <RectangularButton
          onClick={() => this.props.rectangularButton(this.props.id)}
        >
          SELECT
        </RectangularButton>
      </IndividualBidStyle>
    );
  }
}
