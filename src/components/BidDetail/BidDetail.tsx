import * as React from "react";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { BidImageAndDescription } from "./BidImageAndDescription/BidImageAndDescription";
import { Popup } from "Components/Popup/Popup";
export class BidDetail extends React.PureComponent<{
  imageAndDescriptionProp: BidImageAndDescription["props"];
}> {
  static defaultProps: BidDetail["props"] = {
    imageAndDescriptionProp: BidImageAndDescription.defaultProps
  };

  render() {
    return (
      <Popup>
        <BidImageAndDescription />
        <RectangularButton>SELECT SUPPLIER</RectangularButton>
      </Popup>
    );
  }
}
