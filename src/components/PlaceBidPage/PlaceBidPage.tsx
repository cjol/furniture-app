import * as React from "react";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";

import { AuctionClosing } from "./AuctionClosing/AuctionClosing";
import { Bids } from "./Bids/Bids";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <ProjectHeader />
        <Bids />
        <AuctionClosing />
        <ImageBar />
        <ProjectDescription />
        <PlaceBid />
      </Placeholder>
    );
  }
}
