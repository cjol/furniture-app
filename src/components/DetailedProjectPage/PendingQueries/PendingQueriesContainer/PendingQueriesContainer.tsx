import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PendingQueriesContainer extends React.PureComponent<{}> {
  static defaultProps: PendingQueriesContainer["props"] = {};

  render() {
    return (
      <Placeholder description="PendingQueriesContainer" orientation="column">
        <Placeholder description="PendingQueriesQuestion" />
        <Placeholder description="PendingQueriesAnswer" />
      </Placeholder>
    );
  }
}
