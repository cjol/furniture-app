import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectSummary extends React.PureComponent<{}> {
  static defaultProps: ProjectSummary["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <Placeholder description="Header" orientation="row">
          <Placeholder description="Menu Bar" />
          <Placeholder description="Project Listings" />
        </Placeholder>
        <Placeholder description="SearchContainer">
          <Placeholder description="Search Projects" />
          <Placeholder description="Search icon" />
        </Placeholder>
        <Placeholder description="Listings Container" orientation="column">
          <Placeholder description="Listings Info">
            <Placeholder description="Listings Title" />
            <Placeholder description="Up and Down Arrows" />
            <Placeholder description="Avg. Bid" />
          </Placeholder>

          <Placeholder description="Individual Project" orientation="row">
            <Placeholder description="Project Image" />
            <Placeholder description="Project Info" orientation="column">
              <Placeholder description="Project Title" orientation="row" />
              <Placeholder description="Project Tags" />
            </Placeholder>
            <Placeholder description="Project Price" />
          </Placeholder>

          <Placeholder description="Individual Project" orientation="row">
            <Placeholder description="Project Image" />
            <Placeholder description="Project Info" orientation="column">
              <Placeholder description="Project Title" orientation="row" />
              <Placeholder description="Project Tags" />
            </Placeholder>
            <Placeholder description="Project Price" />
          </Placeholder>

          <Placeholder description="Individual Project" orientation="row">
            <Placeholder description="Project Image" />
            <Placeholder description="Project Info" orientation="column">
              <Placeholder description="Project Title" orientation="row" />
              <Placeholder description="Project Tags" />
            </Placeholder>
            <Placeholder description="Project Price" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
