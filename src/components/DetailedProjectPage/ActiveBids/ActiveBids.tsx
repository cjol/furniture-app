import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { Subheading } from "Components/Subheading/Subheading";
import { PlainText } from "Components/PlainText/PlainText";
import { ActiveBidsHeader } from "./ActiveBidsHeader/ActiveBidsHeader";
import { IndividualBid } from "./IndividualBid/IndividualBid";
import styled from "styled-components";
import { whiteButtonColor, normalBoxShadow } from "@style";

const ActiveBidsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
`;

export class ActiveBids extends React.PureComponent<{
  individualBidProps: IndividualBid["props"][];
  activeBidProps: ActiveBidsHeader["props"];
  onClick: () => void;
}> {
  static defaultProps: ActiveBids["props"] = {
    individualBidProps: [
      IndividualBid.defaultProps,
      IndividualBid.defaultProps,
      IndividualBid.defaultProps
    ],
    activeBidProps: ActiveBidsHeader.defaultProps,
    onClick: () => alert("Placing Bid")
  };

  render() {
    const bids = this.props.individualBidProps.map(individualBidProp => {
      return <IndividualBid {...individualBidProp} />;
    });

    return (
      <ActiveBidsStyle>
        <ActiveBidsHeader {...this.props.activeBidProps} />

        {bids}

        <RectangularButton onClick={this.props.onClick}>
          Place Bid
        </RectangularButton>
      </ActiveBidsStyle>
    );
  }
}
