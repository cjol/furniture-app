import { CheckBox } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import * as React from "react";

export class ProjectTag extends React.PureComponent<{}> {
  static defaultProps: ProjectTag["props"] = {};

  render() {
    return (
      <Placeholder description="Project Tag">
        <Placeholder description="Bed" />
        <CheckBox />
        {/* <CheckOutlineBlank /> */}
      </Placeholder>
    );
  }
}
