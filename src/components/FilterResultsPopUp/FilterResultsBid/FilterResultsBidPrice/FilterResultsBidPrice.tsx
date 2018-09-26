import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const FilterResultsBidPriceStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export class FilterResultsBidPrice extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBidPrice["props"] = {};

  render() {
    return <FilterResultsBidPriceStyle>Bid Price</FilterResultsBidPriceStyle>;
  }
}
