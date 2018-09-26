import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const FilterResultsBidPriceScaleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  position: relative;
  flex-grow: 1;
`;
const CircleStyle = styled.div`
  border-radius: 10px;
  height: 10px;
  width: 10px;
  position: absolute;
`;
const FilledBarStyle = styled.div`
  flex-grow: 1;
`;

export class FilterResultsBidPriceScale extends React.PureComponent<{
  bidRangeSetBottom: (bottom: number) => void;
  bidRangeSetTop: (top: number) => void;
}> {
  static defaultProps: FilterResultsBidPriceScale["props"] = {
    bidRangeSetBottom: bottom => alert("Lower Bid Range" + bottom),
    bidRangeSetTop: top => alert("Upper Bid Range: " + top)
  };

  render() {
    return (
      <FilterResultsBidPriceScaleStyle>
        <CircleStyle />
        <FilledBarStyle />
        <CircleStyle />
      </FilterResultsBidPriceScaleStyle>
    );
  }
}
