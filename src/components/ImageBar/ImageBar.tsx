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
  margin-top: 24px;
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
      "https://tyrohq.com/apple-touch-icon.png",
      "https://tyrohq.com/apple-touch-icon.png",
      "https://tyrohq.com/apple-touch-icon.png"
    ],
    chevronLeft: () => alert("Previous Image"),
    chevronRight: () => alert("Next Image")
  };

  render() {
    const imageList = this.props.image.map(image => {
      return <ImageStyle image={image} />;
    });

    return (
      <ImageBarStyle>
        <ChevronStyle onClick={this.props.chevronLeft}>
          <ChevronLeftCheckBoxStyle />
        </ChevronStyle>
        {imageList}
        <ChevronStyle onClick={this.props.chevronRight}>
          <ChevronRightCheckBoxStyle />
        </ChevronStyle>
      </ImageBarStyle>
    );
  }
}
