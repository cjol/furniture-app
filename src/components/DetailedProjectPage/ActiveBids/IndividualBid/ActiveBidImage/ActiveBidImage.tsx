import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const ActiveBidImageStyle = styled.div<{image:string}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 0;
  border: solid;
  background-image: url(${props =>{return props.image}});
`;

export class ActiveBidImage extends React.PureComponent<{image:string;}> {
  static defaultProps: ActiveBidImage["props"] = {image:"www.tyrohq.com/logo.png"};

  render() {
    return <ActiveBidImageStyle image={this.props.image}></ActiveBidImageStyle>;
  }
}
