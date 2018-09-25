import { AppHeader } from "Components/AppHeader/AppHeader";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import * as React from "react";

import { CostDue } from "./CostDue/CostDue";
import { UserContactInfo } from "./UserContactInfo/UserContactInfo";
import { UserDetails } from "Components/UserDetails/UserDetails";
import { PlainText } from "Components/PlainText/PlainText";

export class BidResolutionPage extends React.PureComponent<{}> {
  static defaultProps: BidResolutionPage["props"] = {};

  render() {
    return (
      <Placeholder description="Header" orientation="column">
        <AppHeader />
        <Placeholder description="You've Found your match!" />
        <PlainText />
        <ProjectHeader />
        <CostDue />
        <ImageBar />
        <UserContactInfo />
        <Placeholder description="Rate User Header" />
        <UserDetails />
      </Placeholder>
    );
  }
}
