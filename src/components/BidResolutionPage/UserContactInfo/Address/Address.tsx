import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { white, grey } from "@style";

const AddressContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
  background-color: ${white};
`;
const AddressHeadingStyle = styled.div`
  color: ${grey};
  font-weight: bold;
`;
const AddressStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${grey};
  text-decoration: underline;
`;

export class Address extends React.PureComponent<{
  address: string;
}> {
  static defaultProps: Address["props"] = {
    address: "31 Chwa II Road, Mbuya"
  };

  render() {
    return (
      <AddressContentStyle>
        <AddressHeadingStyle>ADDRESS</AddressHeadingStyle>
        <AddressStyle>address</AddressStyle>
      </AddressContentStyle>
    );
  }
}
