import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";

export class SuppliersSelected extends React.PureComponent<{}> {
  static defaultProps: SuppliersSelected["props"] = {};

  render() {
    return (
      <Placeholder description="Selected Suppliers" orientation="column">
        <ProjectListing />
        <ProjectListing />
        <ProjectListing />
      </Placeholder>
    );
  }
}
