import * as React from "react";
import styled from "styled-components";
import { Placeholder } from "Components/Placeholder";

const ImageStyle = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 100px;
`;
export class ProfileImage extends React.PureComponent<{
  image: string;
}> {
  static defaultProps: ProfileImage["props"] = {
    image: "https://tyro.ug/logo.png"
  };

  render() {
    return <ImageStyle />;
  }
}
