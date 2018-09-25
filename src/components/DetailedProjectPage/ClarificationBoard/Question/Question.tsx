import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class Question extends React.PureComponent<{}> {
  static defaultProps: Question["props"] = {};

  render() {
    return (
      <Placeholder description="Question1" orientation="column">
        <Placeholder description="Question1Title" />
        <Placeholder description="Question1Description" />
      </Placeholder>
    );
  }
}
