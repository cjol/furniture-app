import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { ListingsInfo } from "./ListingsInfo/ListingsInfo";

export class ListingsContainer extends React.PureComponent<{}> {
  static defaultProps: ListingsContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Listings Container" orientation="column">
        <ListingsInfo />

        <ProjectListing />

        <ProjectListing />

        <ProjectListing />
      </Placeholder>
    );
  }
}
