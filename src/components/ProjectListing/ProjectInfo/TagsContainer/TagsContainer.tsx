import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class TagsContainer extends React.PureComponent<{}> {
  static defaultProps: TagsContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Tags Container" orientation="row">
        <Placeholder description="Tags: " />
        <Placeholder description="Tag 1" />
        <Placeholder description="Tag 2" />
      </Placeholder>
    );
  }
}
