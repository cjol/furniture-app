import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { ActiveBidImage } from "./ActiveBidImage/ActiveBidImage";
import { BidDetails } from "./BidDetails/BidDetails";

export class IndividualBid extends React.PureComponent<{}> {
  static defaultProps: IndividualBid["props"] = {};

  render() {
    return (
      <Placeholder description="IndividualBid" orientation="row">
        <ActiveBidImage />
        <BidDetails />
        <RectangularButton />
      </Placeholder>
    );
  }
}
