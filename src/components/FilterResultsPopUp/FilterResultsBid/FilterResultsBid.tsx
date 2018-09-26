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

export class FilterResultsBid extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBid["props"] = {};

  render() {
    return (
      <FilterResultsBidStyle>
        <FilterResultsBidPrice />
        <FilterResultsBidPriceScale />
      </FilterResultsBidStyle>
    );
  }
}
