import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const AddressContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const AddressHeadingStyle = styled.div``;
const AddressStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
