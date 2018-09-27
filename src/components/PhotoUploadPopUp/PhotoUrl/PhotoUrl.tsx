import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont } from "@style";

const PhotoUrlStyle = styled.input`
  font-family: ${mainFont};
`;

export class PhotoUrl extends React.PureComponent<{
  image: string;
}> {
  static defaultProps: PhotoUrl["props"] = {
    image: "https://tyro.ug/logo.png"
  };

  render() {
    return <PhotoUrlStyle value="Copy Image URL" />;
  }
}
