import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { AddBidDescription } from "./AddBidDescription/AddBidDescription";
import { PriceRow } from "./PriceRow/PriceRow";
import { TimeRow } from "./TimeRow/TimeRow";

export class PlaceBid extends React.PureComponent<{}> {
  static defaultProps: PlaceBid["props"] = {};

  render() {
    return (
      <Placeholder orientation="column">
        <Placeholder description="Place Bid Header" />
        <PriceRow />
        <TimeRow />
        <AddBidDescription />
        <RectangularButton />
      </Placeholder>
    );
  }
}
