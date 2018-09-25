import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectDescription extends React.PureComponent<{}> {
  static defaultProps: ProjectDescription["props"] = {};

  render() {
    return (
      <Placeholder description="Project Description" orientation="column">
        <Placeholder description="Add Project Description">
          <Placeholder description="Instructions" />
        </Placeholder>
        <Placeholder description="Actual description" />
      </Placeholder>
    );
  }
}
