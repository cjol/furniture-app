import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { Subheading } from "Components/Subheading/Subheading";

export class ActiveProjectBids extends React.PureComponent<{}> {
  static defaultProps: ActiveProjectBids["props"] = {};

  render() {
    return (
      <Placeholder description="Activeprojects/Bids" orientation="column">
        <Subheading />
        <ProjectListing />
        <ProjectListing />
      </Placeholder>
    );
  }
}
