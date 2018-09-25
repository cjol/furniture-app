import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";

export class FilterResultsHeader extends React.PureComponent<{}> {
  static defaultProps: FilterResultsHeader["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsHeader">
        <Placeholder description="FilterResultsTitle" />
        <Close />
      </Placeholder>
    );
  }
}
