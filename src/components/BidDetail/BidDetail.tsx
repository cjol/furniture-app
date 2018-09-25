import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
export class BidDetail extends React.PureComponent<{}> {
  static defaultProps: BidDetail["props"] = {};

  render() {
    return (
      <Placeholder description="BidPageComponent" orientation="column">
        <Placeholder description="PriceAndTime" orientation="row">
          <Placeholder description="BidPrice" />
          <Placeholder description="TimeTaken" />
          <Close />
          <Placeholder description="image" />
        </Placeholder>
        <Placeholder description="BidDetails" orientation="row">
          <Placeholder description="BidTextImage" />
          <Placeholder description="BidText" />
        </Placeholder>
        <RectangularButton />
      </Placeholder>
    );
  }
}
