import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, Email } from "@material-ui/icons";

export class PhoneLine extends React.PureComponent<{}> {
  static defaultProps: PhoneLine["props"] = {};

  render() {
    return (
      <Placeholder description="Phone line 2" orientation="row">
        <Placeholder description="Phone No 2" />
        <Call />
      </Placeholder>
    );
  }
}
