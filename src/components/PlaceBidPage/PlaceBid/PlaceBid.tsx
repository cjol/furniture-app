import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { PlaceBidState } from "./PlaceBidState";

import { AddBidDescription } from "./AddBidDescription/AddBidDescription";
import { PriceRow } from "./PriceRow/PriceRow";
import { TimeRow } from "./TimeRow/TimeRow";
import styled from "styled-components";
import { mainFont, greenMain, whiteButtonColor, normalBoxShadow } from "@style";

const PlaceBidStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 24px;
  background-color: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
`;

const PlaceBidHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font: ${mainFont};
  color: white;
  padding: 16px;
  background-color: ${greenMain};
`;

export class PlaceBid extends React.PureComponent<{
  onClick: () => any;
}> {
  static defaultProps: PlaceBid["props"] = {
    onClick: () => alert("Clicked a button to place Bid")
  };

  render() {
    return (
      <PlaceBidState>
        {({ price, setPrice, time, setTime, description, setDescription }) => {
          return (
            <PlaceBidStyle>
              <PlaceBidHeaderStyle>Place Bid</PlaceBidHeaderStyle>
              <PriceRow price={price} changeHandler={setPrice} />
              <TimeRow time={time} changeTime={setTime} />
              <AddBidDescription
                description={description}
                setDescription={setDescription}
              />
              <RectangularButton onClick={this.props.onClick} />
            </PlaceBidStyle>
          );
        }}
      </PlaceBidState>
    );
  }
}
