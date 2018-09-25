import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
import { ProjectTitle } from "./ProjectTitle/ProjectTitle";
import { ProjectOwner } from "./ProjectOwner/ProjectOwner";

export class ProjectHeader extends React.PureComponent<{}> {
  static defaultProps: ProjectHeader["props"] = {};

  render() {
    return (
      <Placeholder description="Project header" orientation="column">
        <ProjectTitle />
        <ProjectOwner />
      </Placeholder>
    );
  }
}
