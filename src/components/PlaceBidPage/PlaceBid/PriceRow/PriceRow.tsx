import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PriceRow extends React.PureComponent<{}> {
  static defaultProps: PriceRow["props"] = {};

  render() {
    return (
      <Placeholder description="PriceRow" orientation="row">
        <Placeholder description="Price" />
        <Placeholder description="PriceBid" />
      </Placeholder>
    );
  }
}
