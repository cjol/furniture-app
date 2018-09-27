import { Add } from "@material-ui/icons";
import { Popup } from "Components/Popup/Popup";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { PhotoUrl } from "./PhotoUrl/PhotoUrl";

export class PhotoUploadPopUp extends React.PureComponent<{}> {
  static defaultProps: PhotoUploadPopUp["props"] = {};

  render() {
    return (
      <Popup>
        <PhotoUrl />
        <PhotoUrl />
        <PhotoUrl />
        <Add />
        <RectangularButton />
      </Popup>
    );
  }
}
