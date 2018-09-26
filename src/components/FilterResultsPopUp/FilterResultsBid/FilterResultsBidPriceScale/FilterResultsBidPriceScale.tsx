import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class FilterResultsBidPriceScale extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBidPriceScale["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsBidPriceScale" orientation="row">
        <Placeholder description="Left Circle" />
        <Placeholder description="Filled Bar" />
        <Placeholder description="Right Circle" />
      </Placeholder>
    );
  }
}
