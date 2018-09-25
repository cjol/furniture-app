import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class PlaceBid extends React.PureComponent<{}> {
  static defaultProps: PlaceBid["props"] = {};

  render() {
    return (
      <Placeholder description="PlaceBid" orientation="column">
        <Placeholder description="PriceRow" orientation="row">
          <Placeholder description="Price" />
          <Placeholder description="PriceBid" />
        </Placeholder>

        <Placeholder description="TimeRow" orientation="row">
          <Placeholder description="Time" />
          <Placeholder description="TimeBid" />
        </Placeholder>

        <Placeholder description="AddBidDescription" orientation="column">
          <Placeholder description="Description" />
          <Placeholder description="DescriptionField" />
          <RectangularButton />
        </Placeholder>
      </Placeholder>
    );
  }
}
