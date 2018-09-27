import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const ActiveBidImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 0;
  border: solid;
`;

export class ActiveBidImage extends React.PureComponent<{image:string;}> {
  static defaultProps: ActiveBidImage["props"] = {image:"www.tyrohq.com/logo.png"};

  render() {
    return <ActiveBidImageStyle>{this.props.image}</ActiveBidImageStyle>;
  }
}
