import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PhotoUrl extends React.PureComponent<{}> {
  static defaultProps: PhotoUrl["props"] = {};

  render() {
    return <Placeholder description="PhotoUrl" />;
  }
}
