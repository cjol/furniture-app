import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class TagOptions extends React.PureComponent<{}> {
  static defaultProps: TagOptions["props"] = {};

  render() {
    return (
      <Placeholder description="Tag Options">
        <Placeholder description="Table" />
        <Placeholder description="Chairs" />
      </Placeholder>
    );
  }
}
