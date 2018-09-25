import { Call, Email } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import * as React from "react";

export class UserContactInfo extends React.PureComponent<{}> {
  static defaultProps: UserContactInfo["props"] = {};

  render() {
    return (
      <Placeholder description="Carpenter Info" orientation="column">
        <Placeholder description="Contact 1" orientation="row">
          <Placeholder description="Picture" orientation="row" />
          <Placeholder description="name" orientation="row">
            <Call />
          </Placeholder>
          <RoundButton>
            <Call />
          </RoundButton>
        </Placeholder>
        <Placeholder description="email">
          <Email />
          <Placeholder description="email address" orientation="row" />
          <Placeholder description="email notation" orientation="row" />
        </Placeholder>
        <Placeholder description="Phone line 2" orientation="row">
          <Placeholder description="Phone No 2" />
          <Call />
        </Placeholder>

        <Placeholder description="Workshop address">
          <Placeholder description="Address" />
        </Placeholder>
      </Placeholder>
    );
  }
}
