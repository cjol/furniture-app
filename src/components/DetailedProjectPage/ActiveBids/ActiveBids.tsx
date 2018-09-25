import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import { AmountsDurations } from "./AmountsDurations/AmountsDurations";

export class ActiveBids extends React.PureComponent<{}> {
  static defaultProps: ActiveBids["props"] = {};

  render() {
    return (
      <Placeholder description="ActiveBids" orientation="column">
        <Placeholder description="ActiveBidsTitle" />
        <Placeholder description="arrows" orientation="row">
          <ArrowDropDown />
          <ArrowDropUp />
        </Placeholder>

        <Placeholder description="AmountDurations" orientation="row">
          <Placeholder description="ActiveBidImage1" />
          <Placeholder description="AmountAndDuration" orientation="column">
            <Placeholder description="AmountTime" />
            <Placeholder description="AmountTimeDescription" />
          </Placeholder>
          <Placeholder description="SelectBid1" />
        </Placeholder>
        <Placeholder description="AmountDurations" orientation="row">
          <Placeholder description="ActiveBidImage2" />
          <AmountsDurations />
          <Placeholder description="SelectBid2" />
        </Placeholder>
        <Placeholder description="AmountDurations" orientation="row">
          <Placeholder description="ActiveBidImage3" />
          <Placeholder description="AmountAndDuration" orientation="column">
            <Placeholder description="AmountTime" />
            <Placeholder description="AmountTimeDescription" />
          </Placeholder>
          <Placeholder description="SelectBid3" />
        </Placeholder>
      </Placeholder>
    );
  }
}
