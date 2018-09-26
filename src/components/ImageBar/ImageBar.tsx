import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";
import styled from "styled-components";

const ImageBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
`;

const ChevronStyle = styled.div`
  flex-grow: 0;
`;

const ImageStyle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  height: 50px;
`;
export class ImageBar extends React.PureComponent<{}> {
  static defaultProps: ImageBar["props"] = {};

  render() {
    return (
      <ImageBarStyle>
        <ChevronStyle>
          <ChevronLeft />
        </ChevronStyle>
        <ImageStyle />
        <ImageStyle />
        <ImageStyle />
        <ChevronStyle>
          <ChevronRight />
        </ChevronStyle>
      </ImageBarStyle>
    );
  }
}
