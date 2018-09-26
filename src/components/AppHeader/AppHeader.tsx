import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-grow: 1;
  font-family: "Arial";
  font-size: 15px;
  font-weight: bold;
`;

const MenuStyle = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export class AppHeader extends React.PureComponent<{}> {
  static defaultProps: AppHeader["props"] = {};

  render() {
    return (
      <MenuBarStyle>
        <MenuStyle />
        <TitleStyle />
      </MenuBarStyle>
    );
  }
}
