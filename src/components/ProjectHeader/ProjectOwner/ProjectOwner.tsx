import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";

export class ProjectOwner extends React.PureComponent<{}> {
  static defaultProps: ProjectOwner["props"] = {};

  render() {
    return (
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
    );
  }
}
