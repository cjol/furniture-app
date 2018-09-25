import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";

export class ActiveProjectBids extends React.PureComponent<{}> {
  static defaultProps: ActiveProjectBids["props"] = {};

  render() {
    return (
      <Placeholder description="Activeprojects/Bids" orientation="column">
        <ProjectListing />
        <ProjectListing />
      </Placeholder>
    );
  }
}
