import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const InfoRowPictureStyled = styled.div`
  display: flex;
`;
export class InfoRowPicture extends React.PureComponent<{}> {
  static defaultProps: InfoRowPicture["props"] = {};

  render() {
    return <InfoRowPictureStyled />;
  }
}
