import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const FilterResultsBidPriceStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export class FilterResultsBidPrice extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBidPrice["props"] = {};

  render() {
    return <FilterResultsBidPriceStyle>Bid Price</FilterResultsBidPriceStyle>;
  }
}
