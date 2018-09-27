import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { grey } from "@style";
import { globalAgent } from "https";

const BidPriceScaleTextStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const BidPricesRangestyle=styled.div`
color: ${grey};
  font-size: 11px;`;
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
globalAgent
export class FilterResultsBidPriceScale extends React.PureComponent<{
  top: number;
  bottom: number;
  bidRangeSetBottom: (bottom: number) => void;
  bidRangeSetTop: (top: number) => void;
}> {
  static defaultProps: FilterResultsBidPriceScale["props"] = {
    top: 0,
    bottom: 0,
    bidRangeSetBottom: bottom => alert("Lower Bid Range" + bottom),
    bidRangeSetTop: top => alert("Upper Bid Range: " + top)
  };

  render() {
    return (
      <BidPriceScaleTextStyle>
          <BidPricesRangestyle/>
          <FilterResultsBidPriceScaleStyle>
            <CircleStyle />
            <FilledBarStyle />
            <CircleStyle />
          </FilterResultsBidPriceScaleStyle>
      </BidPriceScaleTextStyle>
    );
  }
}
