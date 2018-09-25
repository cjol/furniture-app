import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class AboutBid extends React.PureComponent<{}> {
  static defaultProps: AboutBid["props"] = {};

  render() {
    return (
      <Placeholder description="AboutBid" orientation="row">
        <Placeholder description="NoOfBids" />
        <Placeholder description="AverageBid" />
        <Placeholder description="AuctionCloses" />
      </Placeholder>
    );
  }
}
