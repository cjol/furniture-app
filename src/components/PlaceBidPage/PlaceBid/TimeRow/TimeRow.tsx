import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class TimeRow extends React.PureComponent<{}> {
  static defaultProps: TimeRow["props"] = {};

  render() {
    return (
      <Placeholder orientation="row">
        <Placeholder description="Time" />
        <Placeholder description="TimeBid" />
      </Placeholder>
    );
  }
}
