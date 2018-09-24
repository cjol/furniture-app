import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class BidSubmitted extends React.PureComponent<{}> {
  static defaultProps: BidSubmitted["props"] = {};

  render() {
    return (
      <Placeholder description="Home Page" orientation="column">
       <Placeholder description="Bid Section">
        <Placeholder description="Bid Title" orientation="row" />
        <Placeholder description="Close Button" orientation="row" />
       </Placeholder>
      <Placeholder description="Response Message" orientation="column" />
      </Placeholder>
    );
  }
}
