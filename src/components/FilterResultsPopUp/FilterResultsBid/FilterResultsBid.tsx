import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class FilterResultsBid extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBid["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsBid">
        <Placeholder description="FilterResultsBidPrice" />
        <Placeholder description="FilterResultsBidPriceScale" orientation="row">
          <Placeholder description="Left Circle" />
          <Placeholder description="Filled Bar" />
          <Placeholder description="Right Circle" />
        </Placeholder>
      </Placeholder>
    );
  }
}
