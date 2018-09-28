import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";
import styled from "styled-components";
import { CheckBox } from "@material-ui/icons";
import { grey } from "@style";

import { ImageBarState } from "./ImageBarState";

const ImageBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ChevronStyle = styled.div`
  flex-grow: 0;
`;

const ImageStyle = styled.div<{ image: string }>`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  background-image: url(${props => props.image});
  margin: 4px;
  height: 116px;
  width: 116px;
  background-size: cover;
  border-style: solid;
  border-width: 1px;
  border-color: ${grey};
`;

const ChevronLeftCheckBoxStyle = styled(ChevronLeft)`
  color: ${grey};
`;
const ChevronRightCheckBoxStyle = styled(ChevronRight)`
  color: ${grey};
`;

export class ImageBar extends React.PureComponent<{
  image: string[];
}> {
  static defaultProps: ImageBar["props"] = {
    image: [
      "https://tyrohq.com/apple-touch-icon.png",
      "https://tyrohq.com/apple-touch-icon.png",
      "https://tyrohq.com/apple-touch-icon.png"
    ]
  };

  render() {
    return (
      <ImageBarState images={this.props.image}>
        {({ goLeft, goRight, selectedPhotoUrls }) => {
          const imageList = selectedPhotoUrls.map(image => {
            return <ImageStyle image={image} />;
          });

          return (
            <ImageBarStyle>
              {goLeft && (
                <ChevronStyle onClick={goLeft}>
                  <ChevronLeftCheckBoxStyle />
                </ChevronStyle>
              )}
              {imageList}
              {goRight && (
                <ChevronStyle onClick={goRight}>
                  <ChevronRightCheckBoxStyle />
                </ChevronStyle>
              )}
            </ImageBarStyle>
          );
        }}
      </ImageBarState>
    );
  }
}
