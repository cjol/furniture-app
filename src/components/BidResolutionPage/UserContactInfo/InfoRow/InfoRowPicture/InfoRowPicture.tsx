import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class InfoRowPicture extends React.PureComponent<{}> {
  static defaultProps: InfoRowPicture["props"] = {};

  render() {
    return <Placeholder description="Picture" />;
  }
}
