import * as React from "react";
import styled from "styled-components";
import { Placeholder } from "Components/Placeholder";

const ImageStyle = styled.div<{ image: string }>`
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export class ProfileImage extends React.PureComponent<{
  image: string;
}> {
  static defaultProps: ProfileImage["props"] = {
    image: "https://tyrohq.com/apple-touch-icon.png"
  };

  render() {
    return <ImageStyle image={this.props.image} />;
  }
}
