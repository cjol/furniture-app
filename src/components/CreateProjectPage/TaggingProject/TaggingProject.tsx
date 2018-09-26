import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagOptions } from "./TagOptions/TagOptions";

export class TaggingProject extends React.PureComponent<{}> {
  static defaultProps: TaggingProject["props"] = {};

  render() {
    return (
      <Placeholder description="Tagging Project">
        <Placeholder description="Tagging Header" />
        <Placeholder description="Tagging Instructions" />
        <TagOptions />
      </Placeholder>
    );
  }
}
