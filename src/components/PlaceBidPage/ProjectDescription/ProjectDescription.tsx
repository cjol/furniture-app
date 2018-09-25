import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectDescription extends React.PureComponent<{}> {
  static defaultProps: ProjectDescription["props"] = {};

  render() {
    return <Placeholder description="ProjectDescription" />;
  }
}
