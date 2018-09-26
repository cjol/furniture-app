import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { PlainText } from "Components/PlainText/PlainText";

export class IndividualBid extends React.PureComponent<{}> {
  static defaultProps: IndividualBid["props"] = {};

  render() {
    return (
      <Placeholder description="IndividualBid" orientation="row">
        <Placeholder description="ActiveBidImage" />
        <Placeholder description="BidDetails" orientation="column">
          <Placeholder description="AmountAndDuration">
            <Placeholder description="Amount" />
            <Placeholder description="Time" />
          </Placeholder>
          <PlainText />
        </Placeholder>
        <RectangularButton />
      </Placeholder>
    );
  }
}
