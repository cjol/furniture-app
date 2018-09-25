import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";

export class ProjectListing extends React.PureComponent<{}> {
  static defaultProps: ProjectListing["props"] = {};

  render() {
    return (
      <Placeholder description="Projectdetails">
        <Placeholder description="ProjectImage" />
        <ProjectInfo />
        <Placeholder description="Amount" />
      </Placeholder>
    );
  }
}
