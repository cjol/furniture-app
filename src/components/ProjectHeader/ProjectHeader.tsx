import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectHeader extends React.PureComponent<{}> {
  static defaultProps: ProjectHeader["props"] = {};

  render() {
    return (
      <Placeholder description="Project header" orientation="column">
        <Placeholder description="ProjectTitle" orientation="column" />
        <Placeholder description="ProjectOwner" orientation="column">
          <Placeholder description="OwnerPicture" />
          <Placeholder description="OwnerName" />
          <Placeholder description="OwnerRating" orientation="row">
            <Placeholder description="RatingStar" />
            <Placeholder description="RatingStar" />
            <Placeholder description="RatingStar" />
            <Placeholder description="RatingStar" />
            <Placeholder description="RatingStar" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
