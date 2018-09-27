import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import styled from "styled-components";
import { mainFont } from "@style";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  font-family: ${mainFont};
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const PopupTitleStyle = styled.div`
  display: block;
  flex-direction: row;
  flex-grow: 1;
`;

export class Header extends React.PureComponent<{ title: string ,
closeFunction:()=>void}> {
  static defaultProps: Header["props"] = {title:"Have A Question",
 closeFunction:()=>alert("Clicked")};

  render() {
    return (
      <HeaderStyle>
        <PopupTitleStyle>MyTitle</PopupTitleStyle>
        <Close />
      </HeaderStyle>
    );
  }
}
