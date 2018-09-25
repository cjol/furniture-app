import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class TaggingProject extends React.PureComponent<{}> {
  static defaultProps: TaggingProject["props"] = {};

  render() {
    return (
      <Placeholder description="Tagging Project">
        <Placeholder description="Tag Your project" orientation="column">
          <Placeholder description="Tagging Instructions" />
          <Placeholder description="Tag Options">
            <Placeholder description="Table" />
            <Placeholder description="Chairs" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
