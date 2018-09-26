import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class InfoNameAndNumber extends React.PureComponent<{}> {
  static defaultProps: InfoNameAndNumber["props"] = {};

  render() {
    return (
      <Placeholder orientation="column">
        <Placeholder description="Name" />
        <Placeholder description="Phone Number" />
      </Placeholder>
    );
  }
}
