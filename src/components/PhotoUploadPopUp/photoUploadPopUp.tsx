import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PhotoUploadPopUp extends React.PureComponent<{}> {
  static defaultProps: PhotoUploadPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="PhotoUploadBox" orientation="column">
        <Placeholder description="PhotoUploadHeader" orientation="row">
          <Placeholder description="PhotoUploadTitle" />
          <Placeholder description="PhotoUploadCloseButton" />
        </Placeholder>
        <Placeholder description="PhotoUrl" />
        <Placeholder description="PhotoAddURLIcon" />
        <Placeholder description="PhotoUpBotton" />
      </Placeholder>
    );
  }
}
