import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const PhotoUrlStyle = styled.div``;

export class PhotoUrl extends React.PureComponent<{}> {
  static defaultProps: PhotoUrl["props"] = {};

  render() {
    return <PhotoUrlStyle>Copy Image URL</PhotoUrlStyle>;
  }
}
