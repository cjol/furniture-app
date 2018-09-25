import { AppHeader } from "Components/AppHeader/AppHeader";
import { AboutBid } from "Components/DetailedProjectPage/AboutBid/AboutBid";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import * as React from "react";

import { PlaceBid } from "./PlaceBid/PlaceBid";

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <ProjectHeader />
        <AboutBid />
        <ImageBar />
        <PlainText />
        <PlaceBid />
      </Placeholder>
    );
  }
}
