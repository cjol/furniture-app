import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";

export class ListingsInfo extends React.PureComponent<{}> {
  static defaultProps: ListingsInfo["props"] = {};

  render() {
    return (
      <Placeholder description="Listings Info" orientation="row">
        <Placeholder description="Listings Title" />
        <ArrowDropUp />
        <ArrowDropDown />
        <Placeholder description="Avg. Bid" />
      </Placeholder>
    );
  }
}
