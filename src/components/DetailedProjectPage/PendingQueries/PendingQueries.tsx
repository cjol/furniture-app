import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PendingQueries extends React.PureComponent<{}> {
  static defaultProps: PendingQueries["props"] = {};

  render() {
    return (
      <Placeholder description="PendingQueries" orientation="column">
        <Placeholder description="PendingQueriesTitle" />

        <Placeholder description="PendingQueriesContainer" orientation="column">
          <Placeholder description="PendingQueriesQuestion" />
          <Placeholder description="PendingQueriesAnswer" />
        </Placeholder>

        <Placeholder description="PendingQueriesContainer" orientation="column">
          <Placeholder description="PendingQueriesQuestion" />
          <Placeholder description="PendingQueriesAnswer" />
        </Placeholder>
      </Placeholder>
    );
  }
}
