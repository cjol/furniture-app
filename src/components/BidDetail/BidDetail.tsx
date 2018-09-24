import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class BidDetail extends React.PureComponent<{}> {
  static defaultProps: BidDetail["props"] = {};

  render() {
    return (
      <Placeholder description="BidPageComponent" orientation="column">
        <Placeholder description="PriceAndTime" orientation="row">
          <Placeholder description="BidPrice" />
          <Placeholder description="TimeTaken" />
          <Placeholder description="image" />
        </Placeholder>
        <Placeholder description="BidDetails" orientation="row">
          <Placeholder description="BidTextImage" />
          <Placeholder description="BidText" />
        </Placeholder>
        <Placeholder description="Select Supplier" />
      </Placeholder>
    );
  }
}
