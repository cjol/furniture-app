import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { AddBidDescription } from "./AddBidDescription/AddBidDescription";
import { PriceRow } from "./PriceRow/PriceRow";
import { TimeRow } from "./TimeRow/TimeRow";
import styled from "styled-components";
import { mainFont } from "@style";
const PlaceBidStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceRowStyle.div``

const PlaceBidHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font: ${mainFont};
`;

export class PlaceBid extends React.PureComponent<{
  priceRowProps: PriceRow["props"];
  timeRowProps: TimeRow["props"];
  addBidDescription:AddBidDescription["props"];
  onClick: () => any;
}> {
  static defaultProps: PlaceBid["props"] = {
    priceRowProps: PriceRow.defaultProps,
    timeRowProps: TimeRow.defaultProps,
    addBidDescription:AddBidDescription.defaultProps,
    onClick: () => alert("Clicked a button to place Bid")
    
  };

  render() {
    return (
      <PlaceBidStyle>
        <PlaceBidHeaderStyle>Place Bid</PlaceBidHeaderStyle>
        <PriceRow/>
        <TimeRow />
        <AddBidDescription />
        <RectangularButton />
      </PlaceBidStyle>
    );
  }
}
