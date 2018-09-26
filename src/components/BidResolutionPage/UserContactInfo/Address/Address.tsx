import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const AddressHeadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const AddressStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export class Address extends React.PureComponent<{}> {
  static defaultProps: Address["props"] = {};

  render() {
    return (
      <AddressHeadingStyle>
        <AddressStyle>ADDRESS</AddressStyle>
      </AddressHeadingStyle>
    );
  }
}
