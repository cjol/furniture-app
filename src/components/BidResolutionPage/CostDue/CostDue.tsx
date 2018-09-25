import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class CostDue extends React.PureComponent<{}> {
  static defaultProps: CostDue["props"] = {};

  render() {
    return (
      <Placeholder description="Cost-Due" orientation="row">
        <Placeholder description="Project Cost" />
        <Placeholder description="Project Due" />
      </Placeholder>
    );
  }
}
