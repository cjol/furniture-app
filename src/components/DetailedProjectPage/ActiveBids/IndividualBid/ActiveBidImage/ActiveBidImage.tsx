import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const ActiveBidImageStyle=styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
flex-grow:0;
border:solid;
`

export class ActiveBidImage extends React.PureComponent<{}> {
  static defaultProps: ActiveBidImage["props"] = {};

  render() {
    return (
      <ActiveBidImageStyle>Image</ActiveBidImageStyle>;
    )
  }
}
