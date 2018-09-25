import { Call, Email } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import * as React from "react";

export class UserContactInfo extends React.PureComponent<{}> {
  static defaultProps: UserContactInfo["props"] = {};

  render() {
    return (
      <Placeholder description="User Info" orientation="column">
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
        <Placeholder description="email">
          <Placeholder description="email address" orientation="row" />
          <Email />
        </Placeholder>
        <Placeholder description="Phone line 2" orientation="row">
          <Placeholder description="Phone No 2" />
          <Call />
        </Placeholder>

        <Placeholder description="Address Heading">
          <Placeholder description="Address" />
        </Placeholder>
      </Placeholder>
    );
  }
}
