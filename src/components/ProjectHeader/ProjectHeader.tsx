import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";

export class ProjectHeader extends React.PureComponent<{}> {
  static defaultProps: ProjectHeader["props"] = {};

  render() {
    return (
      <Placeholder description="Project header" orientation="column">
        <Placeholder description="ProjectTitle" orientation="column" />
        <Placeholder description="ProjectOwner" orientation="column">
          <Placeholder description="OwnerPicture" />
          <Placeholder description="OwnerName" />
          <Placeholder description="RatingStars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
