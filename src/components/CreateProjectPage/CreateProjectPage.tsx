import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ChevronRight } from "@material-ui/icons";
import { ChevronLeft } from "@material-ui/icons";
import { RoundButton } from "Components/RoundButton/RoundButton";
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
          <RoundButton />
        </Placeholder>
        <Placeholder description="Images Available" orientation="row">
          <ChevronLeft />
          <Placeholder description="Image1" />
          <Placeholder description="Image2" />
          <Placeholder description="Image3" />
          <ChevronRight />
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
