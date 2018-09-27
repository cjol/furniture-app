import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const InfoRowPictureStyle = styled.div<{ image: string }>`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 90px;
  background-size: contain;

  background-image: url(${props => {
    return props.image;
  }});
`;
export class InfoRowPicture extends React.PureComponent<{ imageUrl: string }> {
  static defaultProps: InfoRowPicture["props"] = {
    imageUrl: "https://tyrohq.com/apple-touch-icon.png"
  };

  render() {
    return <InfoRowPictureStyle image={this.props.imageUrl} />;
  }
}
