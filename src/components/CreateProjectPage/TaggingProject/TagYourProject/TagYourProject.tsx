import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class TagYourProject extends React.PureComponent<{}> {
  static defaultProps: TagYourProject["props"] = {};

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
