import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";

export class BidPriceAndTime extends React.PureComponent<{}> {
  static defaultProps: BidPriceAndTime["props"] = {};

  render() {
    return (
      <Placeholder description="PriceAndTime" orientation="row">
        <Placeholder description="BidPrice" />
        <Placeholder description="TimeTaken" />
        <Close />
      </Placeholder>
    );
  }
}
