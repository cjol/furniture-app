import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const BidsStyle = styled.div``;
const BidsNumberStyle = styled.div``;
const AverageBidStyle = styled.div``;

export class Bids extends React.PureComponent<{}> {
  static defaultProps: Bids["props"] = {};

  render() {
    return (
      <BidsStyle>
        <BidsNumberStyle />
        <AverageBidStyle />
      </BidsStyle>
    );
  }
}
