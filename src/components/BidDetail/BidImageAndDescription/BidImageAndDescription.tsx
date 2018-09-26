import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const BidDetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const BidTextImageStyle = styled.div`
  justify-content: flex-start;
  width:30px;
  height:35px;
  background-size:cover;
`;
const BidTextStyle = styled.div``;

export class BidImageAndDescription extends React.PureComponent<{}> {
  static defaultProps: BidImageAndDescription["props"] = {};

  render() {
    return (
      <BidDetailsStyle>
        <BidTextImageStyle />
        <BidTextStyle />
      </BidDetailsStyle>
    );
  }
}
