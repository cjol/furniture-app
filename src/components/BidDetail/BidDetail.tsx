import * as React from "react";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { BidImageAndDescription } from "./BidImageAndDescription/BidImageAndDescription";
import { Popup } from "Components/Popup/Popup";
export class BidDetail extends React.PureComponent<{
  imageAndDescriptionProp: BidImageAndDescription["props"];
  onClick:(supplierId:string,)=> void;

}> {
  static defaultProps: BidDetail["props"] = {
    imageAndDescriptionProp: BidImageAndDescription.defaultProps,
    onClick:(supplierId)=> alert("Selecting a supplier")
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
