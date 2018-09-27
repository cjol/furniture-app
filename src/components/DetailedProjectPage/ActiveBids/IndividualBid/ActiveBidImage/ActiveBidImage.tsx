import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const ActiveBidImageStyle = styled.div<{ image: string }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 0;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-image: url(${props => {
    return props.image;
  }});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export class ActiveBidImage extends React.PureComponent<{ image: string }> {
  static defaultProps: ActiveBidImage["props"] = {
    image: "https://tyrohq.com/apple-touch-icon.png"
  };

  render() {
    return <ActiveBidImageStyle image={this.props.image} />;
  }
}
