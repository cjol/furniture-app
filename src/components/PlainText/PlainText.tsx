import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PlainText extends React.PureComponent<{}> {
  static defaultProps: PlainText["props"] = {};

  render() {
    return <Placeholder description="Some Text" />;
  }
}
