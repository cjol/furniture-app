import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class TextField extends React.PureComponent<{}> {
  static defaultProps: TextField["props"] = {};

  render() {
    return <Placeholder description="TextField" />;
  }
}
