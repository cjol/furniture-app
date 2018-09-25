import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class UserCredentials extends React.PureComponent<{}> {
  static defaultProps: UserCredentials["props"] = {};

  render() {
    return (
      <Placeholder description="UserCredentials" orientation="column">
        <Placeholder description="FullName">
          <Placeholder description="TextField" />
        </Placeholder>
        <Placeholder description="EmailAddress">
          <Placeholder description="TextField" />
        </Placeholder>
        <Placeholder description="Location">
          <Placeholder description="LocationField" />
        </Placeholder>
        <Placeholder description="PhoneNumber">
          <Placeholder description="PhoneNumberField" />
        </Placeholder>
        <Placeholder description="Password">
          <Placeholder description="PasswordField" />
        </Placeholder>
      </Placeholder>
    );
  }
}
