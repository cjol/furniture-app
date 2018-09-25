import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { BidPriceAndTime } from "./BidPriceAndTime/BidPriceAndTime";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { BidImageAndDescription } from "./BidImageAndDescription/BidImageAndDescription";
export class BidDetail extends React.PureComponent<{}> {
  static defaultProps: BidDetail["props"] = {};

  render() {
    return (
      <Placeholder description="BidPageComponent" orientation="column">
        <BidPriceAndTime />
        <BidImageAndDescription />
        <RectangularButton>SELECT SUPPLIER</RectangularButton>
      </Placeholder>
    );
  }
}
