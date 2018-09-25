import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { PriceRow } from "./PriceRow/PriceRow";
import { TimeRow } from "./TimeRow/TimeRow";
import { AddBidDescription } from "./AddBidDescription/AddBidDescription";

export class PlaceBid extends React.PureComponent<{}> {
  static defaultProps: PlaceBid["props"] = {};

  render() {
    return (
      <Placeholder description="PlaceBid" orientation="column">
        <PriceRow />
        <TimeRow />
        <AddBidDescription />
      </Placeholder>
    );
  }
}
