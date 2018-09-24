import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { platform } from "os";

export class ProjectSummary extends React.PureComponent<{}> {
  static defaultProps: ProjectSummary["props"] = {};

  render() {
    return <Placeholder description="Component replaces this" />;
    <Placeholder description="Page" orientation="column">
      <Placeholder description="Header" orientation="row">
        <Placeholder description="Menu Bar" />
        <Placeholder description="Project Listings" />
      </Placeholder>
      <Placeholder description="SearchContainer">
        <Placeholder description="Search Projects" />
        <Placeholder description="Search icon" />
      </Placeholder>
      <Placeholder description="Listings Container" orientation="row">
        <Placeholder description="Listings" orientation="column">
          <Placeholder description="Idividual Project" orientation="row">
            <Placeholder description="Project Image" />
            <Placeholder description="Project Title" orientation="row">
              <Placeholder description="Project Tags" />
              <Placeholder description="Project Price" />
            </Placeholder>
          </Placeholder>
          <Placeholder description="Listings Info">
            <Placeholder description="Up and Down Arrows" />
            <Placeholder description="Date" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    </Placeholder>;
  }
}
