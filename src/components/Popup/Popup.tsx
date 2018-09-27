import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Header } from "./Header/Header";
import styled from "styled-components";
import { whiteButtonColor, pressedBoxShadow } from "@style";

const PopupStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${whiteButtonColor};
  box-shadow: ${pressedBoxShadow};
  margin: 16px;
`;

const PopupContentsStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class Popup extends React.PureComponent<{
  show: boolean;
  headerProps: Header["props"];
}> {
  static defaultProps: Popup["props"] = {
    show: true,
    headerProps: Header.defaultProps
  };

  render() {
    return (
      <PopupStyle>
        <Header />
        <PopupContentsStyle>{this.props.children}</PopupContentsStyle>
      </PopupStyle>
    );
  }
}
