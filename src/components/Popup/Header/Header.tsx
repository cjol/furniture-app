import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import styled from "styled-components";

const HeaderStyle = styled.div`
display:flex;
flex-direction:row;
`;

const PopupTitleStyle = styled.div`
display: block;
flex-direction:row;
flex-grow:1
`;

export class Header extends React.PureComponent<{}> {
  static defaultProps: Header["props"] = {};

  render() {
    return (
      <HeaderStyle>
        <PopupTitleStyle>MyTitle</PopupTitleStyle>
        <Close />
      </HeaderStyle>
    );
  }
}
