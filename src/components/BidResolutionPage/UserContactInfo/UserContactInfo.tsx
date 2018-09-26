import { Placeholder } from "Components/Placeholder";
import * as React from "react";
import { InfoRow } from "./InfoRow/InfoRow";
import { EmailRow } from "./EmailRow/EmailRow";
import { PhoneLine } from "./PhoneLine/PhoneLine";
import { Address } from "./Address/Address";

export class UserContactInfo extends React.PureComponent<{}> {
  static defaultProps: UserContactInfo["props"] = {};

  render() {
    return (
      <Placeholder description="User Info" orientation="column">
        <InfoRow />

        <EmailRow />
        <PhoneLine />

        <Address />
      </Placeholder>
    );
  }
}
