import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";
import { mainColor } from "@style";

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-grow: 1;
  font-family: "Arial";
  font-size: 20px;
  font-weight: bold;
  background-color: ${mainColor};
`;

export class AppHeader extends React.PureComponent<{
  Title: String;
}> {
  static defaultProps: AppHeader["props"] = {
    Title: "Project Listings"
  };

  render() {
    return (
      <MenuBarStyle>
        <Menu />
        <TitleStyle>MyTitle</TitleStyle>
      </MenuBarStyle>
    );
  }
}
