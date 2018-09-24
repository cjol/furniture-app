import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectHeader extends React.PureComponent<{}> {
  static defaultProps: ProjectHeader["props"] = {};

  render() {
    return (
      <Placeholder description="Project header" orientation="column">
        <Placeholder description="ProjectTitle" orientation="column">
          <Placeholder description="SelectProject" />
          <Placeholder description="Underline" />
        </Placeholder>
        <Placeholder description="ProjectOwner">
          <Placeholder description="OwnerPicture" />
          <Placeholder description="OwnerName" />
          <Placeholder description="OwnerRating" />
        </Placeholder>
      </Placeholder>
    );
  }
}
