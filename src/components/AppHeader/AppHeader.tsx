import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";

import { mainFont } from "@style";

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e0e0e0;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.5);
  z-index: 5;
  padding: 16px;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-grow: 1;
  font-family: ${mainFont};
  font-size: 20px;
  font-weight: bold;
  margin-left: 36px;
  margin-right: 36px;
`;

export class AppHeader extends React.PureComponent<{
  title: string;
  menu: () => void;
}> {
  static defaultProps: AppHeader["props"] = {
    title: "Project Listings",
    menu: () => alert("Opening menu")
  };

  render() {
    return (
      <MenuBarStyle>
        <Menu onClick={this.props.menu} />
        <TitleStyle>{this.props.title}</TitleStyle>
      </MenuBarStyle>
    );
  }
}
