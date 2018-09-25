import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class IndividualProject extends React.PureComponent<{}> {
  static defaultProps: IndividualProject["props"] = {};

  render() {
    return (
      <Placeholder description="Individual Project" orientation="row">
        <Placeholder description="Project Image" />
        <Placeholder description="Project Info" orientation="column">
          <Placeholder description="Project Title" orientation="row" />
          <Placeholder description="Tag Container" orientation="row">
            <Placeholder description="Tags:" />
            <Placeholder description="Tag 1" />
            <Placeholder description="Tag 2" />
          </Placeholder>
        </Placeholder>
        <Placeholder description="Project Price" />
      </Placeholder>
    );
  }
}
