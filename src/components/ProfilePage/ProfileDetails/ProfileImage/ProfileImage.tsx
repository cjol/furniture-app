import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ProfileImage extends React.PureComponent<{}> {
  static defaultProps: ProfileImage["props"] = {};

  render() {
    return <Placeholder description="Image" />;
  }
}
