import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class Bids extends React.PureComponent<{}> {
  static defaultProps: Bids["props"] = {};

  render() {
    return (
      <Placeholder description="Bids" orientation="row">
        <Placeholder description="BidsNumber" />
        <Placeholder description="AverageBid" />
      </Placeholder>
    );
  }
}
