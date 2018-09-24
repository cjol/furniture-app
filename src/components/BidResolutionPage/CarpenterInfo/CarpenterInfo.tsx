import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Email } from "@material-ui/icons";
export class CarpenterInfo extends React.PureComponent<{}> {
  static defaultProps: CarpenterInfo["props"] = {};

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
