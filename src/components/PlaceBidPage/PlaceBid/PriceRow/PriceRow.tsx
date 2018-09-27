import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont } from "@style";
import { black } from "@style";
import { grey } from "@style";

const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const PriceStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${mainFont};
  color: ${black};
  font-size: 14px;
  font-weight: bold;
`;
const PriceBidStyle = styled.input`
  display: flex;
  flex-direction: column;
  font-family: ${mainFont};
  color: ${grey};
  font-size: 12px;
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
        <PriceStyle> Price(UGX) </PriceStyle>
        <PriceBidStyle value="bid" />
      </RowStyle>
    );
  }
}
