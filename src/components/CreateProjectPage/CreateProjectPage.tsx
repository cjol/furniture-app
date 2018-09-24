import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/projectHeader/projectHeader";

export class CreateProjectPage extends React.PureComponent<{}> {
  static defaultProps: CreateProjectPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <ProjectHeader />
        <Placeholder description="Photos container" orientation="row">
          <Placeholder description="Upload Photos" orientation="column">
            <Placeholder description="Photos Message" />
          </Placeholder>
          <Placeholder description="Round Button" />
        </Placeholder>
        <Placeholder description="Images Available" orientation="row">
          <Placeholder description="Backward scroll" />
          <Placeholder description="Image1" />
          <Placeholder description="Image2" />
          <Placeholder description="Image3" />
          <Placeholder description="Forward scroll" />
        </Placeholder>
        <Placeholder description="Project Description" orientation="column">
          <Placeholder description="Add Project Description">
            <Placeholder description="Instructions" />
          </Placeholder>
          <Placeholder description="Actual description" />
        </Placeholder>
        <Placeholder description="Tagging Project">
          <Placeholder description="Tag Your project" orientation="column">
            <Placeholder description="Tagging Instructions" />
            <Placeholder description="Tag Options">
              <Placeholder description="Table" />
              <Placeholder description="Chairs" />
            </Placeholder>
          </Placeholder>
        </Placeholder>
        <Placeholder description="Post Project" />
      </Placeholder>
    );
  }
}
