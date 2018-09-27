import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont } from "@style";

const PhotoUrlStyle = styled.input`
  font-family: ${mainFont};
`;

export class PhotoUrl extends React.PureComponent<{
  image: string;
  changeImage: (image: any) => void;
}> {
  static defaultProps: PhotoUrl["props"] = {
    image: "https://tyro.ug/logo.png",
    changeImage: image => alert("changing image")
  };

  render() {
    return (
      <PhotoUrlStyle
        value={this.props.image}
        onChange={x => this.props.changeImage(x.target.value)}
      />
    );
  }
}
