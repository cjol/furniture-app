import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class BidImageAndDescription extends React.PureComponent<{}> {
  static defaultProps: BidImageAndDescription["props"] = {};

  render() {
    return (
      <Placeholder description="BidDetails" orientation="row">
        <Placeholder description="BidTextImage" />
        <Placeholder description="BidText" />
      </Placeholder>
    );
  }
}
