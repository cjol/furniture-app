import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";

export class ActiveBidsHeader extends React.PureComponent<{}> {
  static defaultProps: ActiveBidsHeader["props"] = {};

  render() {
    return (
      <Placeholder description="ActiveBidsHeader">
        <Subheading />
        <Placeholder description="arrows" orientation="row">
          <ArrowDropDown />
          <ArrowDropUp />
        </Placeholder>
      </Placeholder>
    );
  }
}
