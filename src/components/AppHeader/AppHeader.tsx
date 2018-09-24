import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class AppHeader extends React.PureComponent<{}> {
  static defaultProps: AppHeader["props"] = {};

  render() {
    return (
      <Placeholder description="MenuBar" orientation="row">
        <Placeholder description="Menu Button" />
        <Placeholder description="Title" />
      </Placeholder>
    );
  }
}
