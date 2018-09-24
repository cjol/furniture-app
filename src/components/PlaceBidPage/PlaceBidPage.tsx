import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />

        <Placeholder description="Bids" orientation="row">
          <Placeholder description="BidsNumber" />
          <Placeholder description="AverageBid" />
        </Placeholder>
        <Placeholder description="AuctionClosing" />

        <Placeholder description="ImageBar" orientation="row">
          <Placeholder description="LeftButton" />
          <Placeholder description="Image1" />
          <Placeholder description="Image2" />
          <Placeholder description="Image3" />
          <Placeholder description="RightButton" />
        </Placeholder>

        <Placeholder description="ProjectDescription" />

        <Placeholder description="PlaceBid" orientation="column">
          <Placeholder description="PriceRow" orientation="row">
            <Placeholder description="Price" />
            <Placeholder description="PriceBid" />
          </Placeholder>

          <Placeholder description="TimeRow" orientation="row">
            <Placeholder description="Time" />
            <Placeholder description="TimeBid" />
          </Placeholder>

          <Placeholder description="TimeToComplete" />
          <Placeholder description="AddBidDescription">
            <Placeholder description="Description" />
            <Placeholder description="DescriptionField" />
            <Placeholder description="PlaceBidButton" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
