import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star, StarBorder } from "@material-ui/icons";

export class UserDetails extends React.PureComponent<{}> {
  static defaultProps: UserDetails["props"] = {};

  render() {
    return (
      <Placeholder description="User Details" orientation="column">
        <Placeholder description="User Picture" />
        <Placeholder description="User Name" />
        <Placeholder description="RatingStars">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
        </Placeholder>
      </Placeholder>
    );
  }
}
