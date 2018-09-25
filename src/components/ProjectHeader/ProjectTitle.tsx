import { Placeholder } from "Components/Placeholder";
import { UserDetails } from "Components/UserDetails/UserDetails";
import * as React from "react";

import { ProjectTitle } from "./ProjectTitle/ProjectTitle";

export class ProjectHeader extends React.PureComponent<{}> {
  static defaultProps: ProjectHeader["props"] = {};

  render() {
    return (
      <Placeholder description="Project header" orientation="column">
        <ProjectTitle />
        <UserDetails />
      </Placeholder>
    );
  }
}
