import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, Email } from "@material-ui/icons";

export class EmailRow extends React.PureComponent<{}> {
  static defaultProps: EmailRow["props"] = {};

  render() {
    return (
      <Placeholder description="email">
        <Placeholder description="email address" orientation="row" />
        <Email />
      </Placeholder>
    );
  }
}
