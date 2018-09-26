import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const PhotoUrlStyle = styled.div``;

export class PhotoUrl extends React.PureComponent<{
  image: string;
}> {
  static defaultProps: PhotoUrl["props"] = {
    image: "https://tyro.ug/logo.png"
  };

  render() {
    return <PhotoUrlStyle>Copy Image URL</PhotoUrlStyle>;
  }
}
