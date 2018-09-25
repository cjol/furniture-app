import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
export class RatingSupplier extends React.PureComponent<{}> {
  static defaultProps: RatingSupplier["props"] = {};

  render() {
    return (
      <Placeholder description="Rate" orientation="column">
        <Placeholder description="Rating Supplier" />
        <Placeholder description="Picture" />
        <Placeholder description="Name of Project Owner" />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Placeholder>
    );
  }
}
