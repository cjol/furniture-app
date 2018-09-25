import * as React from "react";
import styled from "styled-components";
import { Placeholder } from "Components/Placeholder";

const ImageStyle = styled.div``
export class ProfileImage extends React.PureComponent<{}> {
  static defaultProps: ProfileImage["props"] = {};

  render() {
    return <ImageStyle/>;
  }
}
