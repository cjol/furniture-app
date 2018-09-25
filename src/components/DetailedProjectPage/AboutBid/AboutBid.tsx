import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { BidInfo } from "./BidInfo/BidInfo";

export class AboutBid extends React.PureComponent<{}> {
  static defaultProps: AboutBid["props"] = {};

  render() {
    return (
      <Placeholder description="AboutBid" orientation="column">
        <BidInfo />
        <Placeholder description="AuctionCloses" />
      </Placeholder>
    );
  }
}
