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
const PriceBidStyle = styled.input`
  display: flex;
  flex-direction: column;
`;
export class PriceRow extends React.PureComponent<{
  price: string;
}> {
  static defaultProps: PriceRow["props"] = {
    price: "500 Ugx"
  };

  render() {
    return (
      <RowStyle>
        <PriceStyle> Price: </PriceStyle>
        <PriceBidStyle value="bid" />
      </RowStyle>
    );
  }
}
