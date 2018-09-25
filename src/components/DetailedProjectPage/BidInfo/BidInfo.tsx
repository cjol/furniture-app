import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class BidInfo extends React.PureComponent<{}> {
  static defaultProps: BidInfo["props"] = {};

  render() {
    return (
      <Placeholder description="BidInfo" orientation="row">
        <Placeholder description="NoOfBids" />
        <Placeholder description="AverageBid" />
      </Placeholder>
    );
  }
}
