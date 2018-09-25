import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { PendingQueriesContainer } from "./PendingQueriesContainer/PendingQueriesContainer";

export class PendingQueries extends React.PureComponent<{}> {
  static defaultProps: PendingQueries["props"] = {};

  render() {
    return (
      <Placeholder description="PendingQueries" orientation="column">
        <Placeholder description="PendingQueriesTitle" />
        <PendingQueriesContainer />
        <PendingQueriesContainer />
      </Placeholder>
    );
  }
}
