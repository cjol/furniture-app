import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class Question2 extends React.PureComponent<{}> {
  static defaultProps: Question2["props"] = {};

  render() {
    return (
      <Placeholder description="Question2" orientation="column">
        <Placeholder description="Question2Title" />
        <Placeholder description="Question2Description" />
      </Placeholder>
    );
  }
}
