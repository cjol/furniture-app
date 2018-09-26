import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Call, Email } from "@material-ui/icons";

export class InfoRow extends React.PureComponent<{}> {
  static defaultProps: InfoRow["props"] = {};

  render() {
    return (
      <Placeholder orientation="row">
        <Placeholder description="Picture" />
        <Placeholder orientation="column">
          <Placeholder description="Name" />
          <Placeholder description="Phone Number" />
        </Placeholder>
        <RoundButton>
          <Call />
        </RoundButton>
      </Placeholder>
    );
  }
}
