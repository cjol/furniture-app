import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagsContainer } from "./TagsContainer/TagsContainer";

export class ProjectInfo extends React.PureComponent<{}> {
  static defaultProps: ProjectInfo["props"] = {};

  render() {
    return (
      <Placeholder description="ProjectInfo" orientation="column">
        <Placeholder description="Project Title" orientation="column" />
        <TagsContainer />
      </Placeholder>
    );
  }
}
