import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";
import styled from "styled-components";
import { CheckBox } from "@material-ui/icons";
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
const ChevronLeftCheckBoxStyle = styled(ChevronLeft)`
  color: grey;
`;
const ChevronRightCheckBoxStyle = styled(ChevronRight)`
  color: grey;
`;

export class ImageBar extends React.PureComponent<{
  image: string[];
  chevronLeft: () => void;
  chevronRight: () => void;
}> {
  static defaultProps: ImageBar["props"] = {
    image: [
      "https://tyro.ug/logo.png",
      "https://tyro.ug/logo.png",
      "https://tyro.ug/logo.png"
    ],
    chevronLeft: () => alert("Previous Image"),
    chevronRight: () => alert("Next Image")
  };

  render() {
    return (
      <ImageBarStyle>
        <ChevronStyle>
          <ChevronLeftCheckBoxStyle />
        </ChevronStyle>
        <ImageStyle />
        <ImageStyle />
        <ImageStyle />
        <ChevronStyle>
          <ChevronRightCheckBoxStyle />
        </ChevronStyle>
      </ImageBarStyle>
    );
  }
}
