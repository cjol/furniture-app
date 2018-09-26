import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";
import { grey } from "@style";
import { mainFont } from "@style";

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-grow: 1;
  font-family: ${mainFont};
  font-size: 20px;
  font-weight: bold;
  background-color: ${grey};
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
