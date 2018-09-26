import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Call, Email } from "@material-ui/icons";
import { InfoRowPicture } from "./InfoRowPicture/InfoRowPicture";
import { InfoNameAndNumber } from "./InfoNameAndNumber/InfoNameAndNumber";

export class InfoRow extends React.PureComponent<{}> {
  static defaultProps: InfoRow["props"] = {};

  render() {
    return (
      <Placeholder orientation="row">
        <InfoRowPicture />
        <InfoNameAndNumber />
        <RoundButton>
          <Call />
        </RoundButton>
      </Placeholder>
    );
  }
}
