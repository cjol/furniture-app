import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";
import styled from "styled-components";

const ImageBarStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height:50%;
  max-height:25%;
`;
export class ImageBar extends React.PureComponent<{}> {
  static defaultProps: ImageBar["props"] = {};

  render() {
    return (
      <ImageBarStyle>
        <ChevronLeft />
        <ImageStyle />
        <ImageStyle />
        <ImageStyle />
        <ChevronRight />
      </ImageBarStyle>
    );
  }
}
