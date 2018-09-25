import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { Subheading } from "Components/Subheading/Subheading";

export class SuppliersSelected extends React.PureComponent<{}> {
  static defaultProps: SuppliersSelected["props"] = {};

  render() {
    return (
      <Placeholder description="Selected Suppliers" orientation="column">
        <Subheading />
        <ProjectListing />
        <ProjectListing />
        <ProjectListing />
      </Placeholder>
    );
  }
}
