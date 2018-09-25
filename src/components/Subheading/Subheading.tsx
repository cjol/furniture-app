import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class Subheading extends React.PureComponent<{}> {
  static defaultProps: Subheading["props"] = {};

  render() {
    return <Placeholder description="SUBHEADING" />;
  }
}
