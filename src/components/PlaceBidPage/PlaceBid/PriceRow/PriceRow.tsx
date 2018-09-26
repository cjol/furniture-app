import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const PriceStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceBidStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export class PriceRow extends React.PureComponent<{}> {
  static defaultProps: PriceRow["props"] = {};

  render() {
    return (
      <RowStyle>
        <PriceStyle> Price: </PriceStyle>
        <PriceBidStyle> PriceBid: </PriceBidStyle>
      </RowStyle>
    );
  }
}
