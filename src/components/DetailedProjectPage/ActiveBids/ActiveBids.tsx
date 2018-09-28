import { normalBoxShadow, white } from "@style";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ActiveBidsHeader } from "./ActiveBidsHeader/ActiveBidsHeader";
import { IndividualBid } from "./IndividualBid/IndividualBid";

const ActiveBidsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${white};
  box-shadow: ${normalBoxShadow};
  padding: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const StyledLink = styled(Link)`
  align-self: center;
`;

export class ActiveBids extends React.PureComponent<{
  individualBidProps: IndividualBid["props"][];
  activeBidProps: ActiveBidsHeader["props"];
  isOwner: boolean;
  onClick: () => void;
  projectID: string;
}> {
  static defaultProps: ActiveBids["props"] = {
    individualBidProps: [
      IndividualBid.defaultProps,
      IndividualBid.defaultProps,
      IndividualBid.defaultProps
    ],
    isOwner: true,
    activeBidProps: ActiveBidsHeader.defaultProps,
    onClick: () => {},
    projectID: "123"
  };

  render() {
    const bids = this.props.individualBidProps.map(individualBidProp => {
      return (
        <IndividualBid isOwner={this.props.isOwner} {...individualBidProp} />
      );
    });

    let maybeBidButton;
    if (!this.props.isOwner) {
      maybeBidButton = (
        <StyledLink to={"/project/" + this.props.projectID + "/bid"}>
          <RectangularButton onClick={this.props.onClick}>
            PLACE BID
          </RectangularButton>
        </StyledLink>
      );
    }

    return (
      <ActiveBidsStyle>
        <ActiveBidsHeader {...this.props.activeBidProps} />

        {bids}

        {maybeBidButton}
      </ActiveBidsStyle>
    );
  }
}
