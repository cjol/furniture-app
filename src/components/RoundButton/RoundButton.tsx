import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Add } from "@material-ui/icons";

export class RoundButton extends React.PureComponent<{}> {
  static defaultProps: RoundButton["props"] = {};

  render() {
    return (
      <Placeholder description="Round Button">
        <Add />
      </Placeholder>
    );
  }
}
