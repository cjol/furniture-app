import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class CostDue extends React.PureComponent<{}> {
  static defaultProps: CostDue["props"] = {};

  render() {
    return (
      <Placeholder description="Cost-Due">
        <Placeholder description="Project Cost" orientation="row" />
        <Placeholder description="Project Due" orientation="row" />
      </Placeholder>
    );
  }
}
