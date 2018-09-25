import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";

import { ChevronRight } from "@material-ui/icons";
import { ChevronLeft } from "@material-ui/icons";

import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <ProjectHeader />
        <Placeholder description="Bids" orientation="row">
          <Placeholder description="BidsNumber" />
          <Placeholder description="AverageBid" />
        </Placeholder>
        <Placeholder description="AuctionClosing" />

        <Placeholder description="ImageBar" orientation="row">
          <ChevronLeft />
          <Placeholder description="Image1" />
          <Placeholder description="Image2" />
          <Placeholder description="Image3" />
          <ChevronRight />
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

          <Placeholder description="AddBidDescription" orientation="column">
            <Placeholder description="Description" />
            <Placeholder description="DescriptionField" />
            <RectangularButton />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
