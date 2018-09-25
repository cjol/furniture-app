import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class ActiveBids extends React.PureComponent<{}> {
  static defaultProps: ActiveBids["props"] = {};

  render() {
    return (
      <Placeholder description="ActiveBids" orientation="column">
        <Placeholder description="ActiveBidsHeader">
          <Placeholder description="ActiveBidsTitle" />
          <Placeholder description="arrows" orientation="row">
            <ArrowDropDown />
            <ArrowDropUp />
          </Placeholder>
        </Placeholder>

        <Placeholder description="IndividualBid" orientation="row">
          <Placeholder description="ActiveBidImage" />
          <Placeholder description="BidDetails" orientation="column">
            <Placeholder description="AmountAndDuration">
              <Placeholder description="Amount" />
              <Placeholder description="Time" />
            </Placeholder>
            <Placeholder description="AmountTimeDescription" />
          </Placeholder>
          <RectangularButton />
        </Placeholder>

        <Placeholder description="IndividualBid" orientation="row">
          <Placeholder description="ActiveBidImage" />
          <Placeholder description="BidDetails" orientation="column">
            <Placeholder description="AmountAndDuration">
              <Placeholder description="Amount" />
              <Placeholder description="Time" />
            </Placeholder>
            <Placeholder description="AmountTimeDescription" />
          </Placeholder>
          <RectangularButton />
        </Placeholder>

        <Placeholder description="IndividualBid" orientation="row">
          <Placeholder description="ActiveBidImage2" />
          <Placeholder description="AmountAndDuration" orientation="column">
            <Placeholder description="Amount" />
            <Placeholder description="Time" />
            <Placeholder description="AmountTimeDescription" />
          </Placeholder>
          <RectangularButton />
        </Placeholder>
      </Placeholder>
    );
  }
}
