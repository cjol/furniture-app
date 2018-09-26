import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";
import styled from "styled-components";

const ImageBarStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
export class ImageBar extends React.PureComponent<{}> {
  static defaultProps: ImageBar["props"] = {};

  render() {
    return (
      <ImageBarStyle>
        <ChevronLeft />
        <Placeholder description="Image1" />
        <Placeholder description="Image2" />
        <Placeholder description="Image3" />
        <ChevronRight />
      </ImageBarStyle>
    );
  }
}
