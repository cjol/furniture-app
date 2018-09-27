import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { grey, greenMain } from "@style";
import { globalAgent } from "https";

const CircleStyle = styled.div`
  border-radius: 10px;
  height: 10px;
  width: 10px;
  background-color: ${greenMain};
  position: relative;
  z-index: 1;
`;
const BarStyle = styled.div`
  position: absolute;
  width: 100%;
  top: 16px;
  height: 3px;
  border-radius: 4px;
`;
const FilledBarStyle = styled(BarStyle)`
  z-index: -1;
  background-color: ${greenMain};
  height: 4px;
`;
const UnfilledBarStyle = styled(BarStyle)`
  z-index: -2;
  background-color: ${grey};
`;

const FilledScaleContainerStyle = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  max-width: 50%;
  left: 25%;
`;
const ScaleContainerStyle = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-direction: column;
`;

const ScaleCircleContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
`;
const BidPricesRangestyle = styled.div`
  color: ${grey};
  font-size: 11px;
`;
const ScaleLabelContainerStyle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

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
      <ScaleContainerStyle>
        <FilledScaleContainerStyle>
          <ScaleLabelContainerStyle>
            <BidPricesRangestyle>250k</BidPricesRangestyle>
            <BidPricesRangestyle>1M</BidPricesRangestyle>
          </ScaleLabelContainerStyle>
          <ScaleCircleContainerStyle>
            <CircleStyle />
            <CircleStyle />
          </ScaleCircleContainerStyle>
          <FilledBarStyle />
        </FilledScaleContainerStyle>
        <UnfilledBarStyle />
      </ScaleContainerStyle>
    );
  }
}
