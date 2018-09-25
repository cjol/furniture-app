import { Placeholder } from "Components/Placeholder";
import * as React from "react";

import { ProjectTag } from "./ProjectTag/ProjectTag";

export class FilterResultsProjectTags extends React.PureComponent<{}> {
  static defaultProps: FilterResultsProjectTags["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsProjectTags" orientation="column">
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
