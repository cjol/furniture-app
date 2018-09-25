import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class AmountsDurations extends React.PureComponent<{}> {
  static defaultProps: AmountsDurations["props"] = {};

  render() {
    return (
      <Placeholder description="AmountAndDuration" orientation="column">
        <Placeholder description="AmountTime" />
        <Placeholder description="AmountTimeDescription" />
      </Placeholder>
    );
  }
}
