import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class BidDetail extends React.PureComponent<{}> {
  static defaultProps: BidDetail["props"] = {};

  render() {
    return (
      <Placeholder description="BidPageComponent" orientation="row">
        <Placeholder description="PriceAndTime" orientation="row">
          <Placeholder description="BidPrice" />
          <Placeholder description="TimeTaken" />
        </Placeholder>
        <Placeholder description="BidText" />
        <Placeholder description="Select Supplier" />
      </Placeholder>
    );
  }
}
