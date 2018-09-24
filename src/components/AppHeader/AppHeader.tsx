import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Menu } from "@material-ui/icons";

export class AppHeader extends React.PureComponent<{}> {
  static defaultProps: AppHeader["props"] = {};

  render() {
    return (
      <Placeholder description="MenuBar" orientation="row">
        <Menu/>
        <Placeholder description="Title" />
      </Placeholder>
    );
  }
}
