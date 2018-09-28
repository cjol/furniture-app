import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Header } from "./Header/Header";
import styled from "styled-components";
import { whiteButtonColor, pressedBoxShadow } from "@style";

const PopupCloakStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    if (this.props.show === false) return null;
    return (
      <PopupCloakStyle>
        <PopupStyle>
          <Header {...this.props.headerProps} />
          <PopupContentsStyle>{this.props.children}</PopupContentsStyle>
        </PopupStyle>
      </PopupCloakStyle>
    );
  }
}
