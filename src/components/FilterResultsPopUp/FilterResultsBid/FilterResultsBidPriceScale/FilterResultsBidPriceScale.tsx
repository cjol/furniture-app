import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const FilterResultsBidPriceScaleStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftCircleStyle = styled.div`
  border-radius: 40px;
`;
const FilledBarStyle = styled.div`
  justify-content: stretch;
`;

const RightCircleStyle = styled.div`
  border-radius: 40px;
`;

export class FilterResultsBidPriceScale extends React.PureComponent<{}> {
  static defaultProps: FilterResultsBidPriceScale["props"] = {};

  render() {
    return (
      <FilterResultsBidPriceScaleStyle>
        <LeftCircleStyle />
        <FilledBarStyle />
        <RightCircleStyle />
      </FilterResultsBidPriceScaleStyle>
    );
  }
}
