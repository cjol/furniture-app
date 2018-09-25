import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectTitle extends React.PureComponent<{}> {
  static defaultProps: ProjectTitle["props"] = {};

  render() {
    return <Placeholder description="ProjectTitle" orientation="column" />;
  }
}
