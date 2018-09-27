import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont } from "@style";
import { black } from "@style";
import { grey } from "@style";
import { greenMain } from "@style";

const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
`;
const PriceStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${mainFont};
  color: ${grey};
  font-size: 14px;
  font-weight: bold;
  margin-right: 16px;
`;
const PriceBidStyle = styled.input`
  display: flex;
  flex-direction: column;
  font-family: ${mainFont};
  font-size: 12px;
  border: none;

  border-bottom-width: 2px;
  border-bottom-color: ${greenMain};
  border-bottom-style: solid;
`;
export class PriceRow extends React.PureComponent<{
  price: string;
  changeHandler: (bid: any) => void;
}> {
  static defaultProps: PriceRow["props"] = {
    price: "500",
    changeHandler: bid => alert("Bid Price" + bid)
  };

  render() {
    return (
      <RowStyle>
        <PriceStyle> Price(UGX) </PriceStyle>
        <PriceBidStyle type="number" onChange={this.props.changeHandler} />
      </RowStyle>
    );
  }
}
