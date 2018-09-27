import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Header } from "./Header/Header";
import styled from "styled-components";

const PopupStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PopupContentsStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class Popup extends React.PureComponent<{
  headerProps: Header["props"];
}> {
  static defaultProps: Popup["props"] = {
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
