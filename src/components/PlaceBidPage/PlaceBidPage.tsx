import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <Placeholder description="MenuBar" orientation="row">
          <Placeholder description="MenuButton" />
          <Placeholder description="Title" />
        </Placeholder>
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
        </Placeholder>

        <Placeholder description="ProjectDescription" />

        <Placeholder description="PlaceBid" orientation="column">
          <Placeholder description="Price" />
          <Placeholder description="TimeToComplete" />
          <Placeholder description="AddBidDescription">
            <Placeholder description="Description1" />
            <Placeholder description="Description2" />
            <Placeholder description="PlaceBidButton" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
