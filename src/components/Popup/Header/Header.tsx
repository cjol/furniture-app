import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";

export class Header extends React.PureComponent<{}> {
  static defaultProps: Header["props"] = {};

  render() {
    return (
      <Placeholder description="Header" orientation="row">
        <Placeholder description="Popup Title" />
        <Close />
      </Placeholder>
    );
  }
}
