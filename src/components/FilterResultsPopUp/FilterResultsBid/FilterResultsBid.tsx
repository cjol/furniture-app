import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { FilterResultsBidPrice } from "./FilterResultsBidPrice/FilterResultsBidPrice";
import { FilterResultsBidPriceScale } from "./FilterResultsBidPriceScale/FilterResultsBidPriceScale";

export class FilterResultsBid extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBid["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsBid">
        <FilterResultsBidPrice />
        <FilterResultsBidPriceScale />
      </Placeholder>
    );
  }
}
