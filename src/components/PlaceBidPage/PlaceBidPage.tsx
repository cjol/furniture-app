import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ChevronRight } from "@material-ui/icons";
import { ChevronLeft } from "@material-ui/icons";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { Bids } from "./Bids/Bids";
import { AuctionClosing } from "./AuctionClosing/AuctionClosing";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import { ImageBar } from "./ImageBar/ImageBar";

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
