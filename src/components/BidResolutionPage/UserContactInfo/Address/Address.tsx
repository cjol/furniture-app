import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class Address extends React.PureComponent<{}> {
  static defaultProps: Address["props"] = {};

  render() {
    return (
      <Placeholder description="Address Heading">
        <Placeholder description="Address" />
      </Placeholder>
    );
  }
}
