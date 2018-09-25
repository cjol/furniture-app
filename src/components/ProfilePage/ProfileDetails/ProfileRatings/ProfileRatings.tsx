import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
import { StarBorder } from "@material-ui/icons";

export class ProfileRatings extends React.PureComponent<{}> {
  static defaultProps: ProfileRatings["props"] = {};

  render() {
    return (
      <Placeholder description="Ratings">
        <Star />
        <Star />
        <Star />
        <Star />
        <StarBorder />
      </Placeholder>
    );
  }
}
