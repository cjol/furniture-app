import { Placeholder } from "Components/Placeholder";
import { ProjectTag } from "./ProjectTag/ProjectTag";
import * as React from "react";

export class FilterResultsProjectTags extends React.PureComponent<{}> {
  static defaultProps: FilterResultsProjectTags["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsProjectTags" orientation="row">
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
      </Placeholder>
    );
  }
}
