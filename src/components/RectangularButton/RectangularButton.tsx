import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class RectangularButton extends React.PureComponent<{}> {
  static defaultProps: RectangularButton["props"] = {};

  render() {
    return <Placeholder description="Button Label" />;
  }
}
