import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { Close } from "@material-ui/icons";
import { Add } from "@material-ui/icons";

export class PhotoUploadPopUp extends React.PureComponent<{}> {
  static defaultProps: PhotoUploadPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="PhotoUploadBox" orientation="column">
        <Placeholder description="PhotoUploadHeader" orientation="row">
          <Placeholder description="PhotoUploadTitle" />
          <Close />
        </Placeholder>
        <Placeholder description="PhotoUrl" />
        <Add />
        <RectangularButton>UPLOAD PHOTOS</RectangularButton>
      </Placeholder>
    );
  }
}
