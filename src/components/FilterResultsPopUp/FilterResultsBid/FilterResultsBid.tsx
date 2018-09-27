import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { FilterResultsBidPrice } from "./FilterResultsBidPrice/FilterResultsBidPrice";
import { FilterResultsBidPriceScale } from "./FilterResultsBidPriceScale/FilterResultsBidPriceScale";
import styled from "styled-components";

const FilterResultsBidStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

export class FilterResultsBid extends React.PureComponent<{
  filterResultsBidPriceScaleProps: FilterResultsBidPriceScale["props"];
}> {
  static defaultProps: FilterResultsBid["props"] = {
    filterResultsBidPriceScaleProps: FilterResultsBidPriceScale.defaultProps
  };

  render() {
    return (
      <FilterResultsBidStyle>
        <FilterResultsBidPrice />
        <FilterResultsBidPriceScale {...this.props.filterResultsBidPriceScaleProps} />
      </FilterResultsBidStyle>
    );
  }
}
