import * as React from "react";
import styled from "styled-components";
import { Placeholder } from "Components/Placeholder";

const ImageStyle = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
`;
export class ProfileImage extends React.PureComponent<{}> {
  static defaultProps: ProfileImage["props"] = {};

  render() {
    return <ImageStyle />;
  }
}
