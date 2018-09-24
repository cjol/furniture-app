import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class __ComponentName__ extends React.PureComponent<{}> {
  static defaultProps: __ComponentName__["props"] = {};

  render() {
    return (
      <Placeholder description="Home Page">
        <Placeholder description="Bid Title" />
        <Placeholder description="Response Message" />
      </Placeholder>
    );
  }
}
