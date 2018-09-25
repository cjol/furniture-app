import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagOptions } from "./TagOptions/TagOptions";
import { Subheading } from "Components/Subheading/Subheading";

export class TaggingProject extends React.PureComponent<{}> {
  static defaultProps: TaggingProject["props"] = {};

  render() {
    return (
      <Placeholder description="Tagging Project" orientation="column">
        <Subheading />
        <Placeholder description="Tagging Instructions" />
        <TagOptions />
      </Placeholder>
    );
  }
}
