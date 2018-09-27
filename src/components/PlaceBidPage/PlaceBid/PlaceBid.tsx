import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { PlaceBidState } from "./PlaceBidState";
import { BidSubmitted } from "Components/BidSubmitted/BidSubmitted";

import { AddBidDescription } from "./AddBidDescription/AddBidDescription";
import { PriceRow } from "./PriceRow/PriceRow";
import { TimeRow } from "./TimeRow/TimeRow";
import styled from "styled-components";
import { mainFont, greenMain, whiteButtonColor, normalBoxShadow } from "@style";

const PlaceBidStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  background-color: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};

  margin-top: 12px;
  margin-bottom: 12px;
`;

const PlaceBidHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font: ${mainFont};
  color: white;
  background-color: ${greenMain};
  padding: 16px;
`;
const BidContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  padding-top: 12px;
  padding-bottom: 12px;
`;
export class PlaceBid extends React.PureComponent<{}> {
  static defaultProps: PlaceBid["props"] = {};

  render() {
    return (
      <PlaceBidState>
        {({
          price,
          setPrice,
          time,
          setTime,
          description,
          setDescription,
          showConfirmationPopup,
          toggleConfirmationPopup
        }) => {
          return (
            <PlaceBidStyle>
              <BidSubmitted
                title="My Project"
                popup={{
                  show: showConfirmationPopup,
                  headerProps: {
                    closeFunction: toggleConfirmationPopup,
                    title: "Bid Submitted"
                  }
                }}
              />
              <PlaceBidHeaderStyle>Place Bid</PlaceBidHeaderStyle>
              <BidContents>
                <PriceRow price={price} changeHandler={setPrice} />
                <TimeRow time={time} changeTime={setTime} />
                <AddBidDescription
                  description={description}
                  setDescription={setDescription}
                />
                <RectangularButton onClick={toggleConfirmationPopup} />
              </BidContents>
            </PlaceBidStyle>
          );
        }}
      </PlaceBidState>
    );
  }
}
