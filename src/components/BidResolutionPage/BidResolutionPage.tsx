import { AppHeader } from "Components/AppHeader/AppHeader";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import * as React from "react";

import { CostDue } from "./CostDue/CostDue";
import { RatingSupplier } from "./RatingSupplier/RatingSupplier";
import { UserContactInfo } from "./UserContactInfo/UserContactInfo";

export class BidResolutionPage extends React.PureComponent<{}> {
  static defaultProps: BidResolutionPage["props"] = {};

  render() {
    return (
      <Placeholder description="Header" orientation="column">
        <AppHeader />
        <Placeholder description="Result" />
        <Placeholder description="Result Message" />
        <ProjectHeader />
        <CostDue />
        <ImageBar />
        <UserContactInfo />
        <RatingSupplier />
      </Placeholder>
    );
  }
}
