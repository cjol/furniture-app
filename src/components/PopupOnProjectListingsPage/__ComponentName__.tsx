import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProjectListingsPage extends React.PureComponent<{}> {
  static defaultProps: ProjectListingsPage["props"] = {};

  render() {
    return <Placeholder description="Component replaces this" />;
    <Placeholder description="Page" orientation="column">
      <Placeholder description="Header" orientation="row">
        <Placeholder description="Filter results" />
        <Placeholder description="Cancel Button" />
      </Placeholder>
    </Placeholder>;
  }
}
