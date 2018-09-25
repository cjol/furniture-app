import * as React from "react";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { BidImageAndDescription } from "./BidImageAndDescription/BidImageAndDescription";
import { Popup } from "Components/Popup/Popup";
export class BidDetail extends React.PureComponent<{}> {
  static defaultProps: BidDetail["props"] = {};

  render() {
    return (
      <Popup>
        <BidImageAndDescription />
        <RectangularButton>SELECT SUPPLIER</RectangularButton>
      </Popup>
    );
  }
}
