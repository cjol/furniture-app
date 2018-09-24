import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class BidSubmitted extends React.PureComponent<{}> {
  static defaultProps:BidSubmitted ["props"] = {};

  render() {
    return (
      <Placeholder description="Home Page">
        <Placeholder description="Bid Title" />
        <Placeholder description="Close Button"/>
        <Placeholder description="Response Message" />
      </Placeholder>
    );
  }
}
