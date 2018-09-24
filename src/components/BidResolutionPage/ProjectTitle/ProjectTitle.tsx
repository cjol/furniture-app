import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
export class ProjectTitle extends React.PureComponent<{}> {
  static defaultProps: ProjectTitle["props"] = {};

  render() {
    return (
      <Placeholder description="Project Title">
        <Placeholder description="Image" />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Placeholder>
    );
  }
}
