import { Add, Close } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { PhotoUploadHeader } from "./PhotoUploadHeader/PhotoUploadHeader";
import { PhotoUrl } from "./PhotoUrl/PhotoUrl";
import * as React from "react";

export class PhotoUploadPopUp extends React.PureComponent<{}> {
  static defaultProps: PhotoUploadPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="PhotoUploadBox" orientation="column">
        <PhotoUploadHeader />
        <PhotoUrl />
        <Add />
        <RectangularButton />
      </Placeholder>
    );
  }
}
