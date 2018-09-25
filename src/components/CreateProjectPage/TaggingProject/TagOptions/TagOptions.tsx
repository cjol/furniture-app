import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";

export class TagOptions extends React.PureComponent<{}> {
  static defaultProps: TagOptions["props"] = {};

  render() {
    return (
      <Placeholder description="Tag Options">
        <Placeholder description="Table" />
        <Placeholder description="Chairs" />
        <RoundButton />
      </Placeholder>
    );
  }
}
