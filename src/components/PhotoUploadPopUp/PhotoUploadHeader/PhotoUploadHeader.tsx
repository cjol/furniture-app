import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";

export class PhotoUploadHeader extends React.PureComponent<{}> {
  static defaultProps: PhotoUploadHeader["props"] = {};

  render() {
    return (
      <Placeholder description="PhotoUploadHeader" orientation="row">
        <Placeholder description="PhotoUploadTitle" />
        <Close />
      </Placeholder>
    );
  }
}
