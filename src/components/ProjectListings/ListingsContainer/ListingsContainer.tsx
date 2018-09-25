import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";

export class ListingsContainer extends React.PureComponent<{}> {
  static defaultProps: ListingsContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Listings Container" orientation="column">
        <Placeholder description="Listings Info" orientation="row">
          <Placeholder description="Listings Title" />
          <ArrowDropUp />
          <ArrowDropDown />
          <Placeholder description="Avg. Bid" />
        </Placeholder>

        <Placeholder description="Individual Project" orientation="row">
          <Placeholder description="Project Image" />
          <Placeholder description="Project Info" orientation="column">
            <Placeholder description="Project Title" orientation="row" />
            <Placeholder description="Tag Container" orientation="row">
              <Placeholder description="Tags:" />
              <Placeholder description="Tag 1" />
              <Placeholder description="Tag 2" />
            </Placeholder>
          </Placeholder>
          <Placeholder description="Project Price" />
        </Placeholder>

        <Placeholder description="Individual Project" orientation="row">
          <Placeholder description="Project Image" />
          <Placeholder description="Project Info" orientation="column">
            <Placeholder description="Project Title" orientation="row" />
            <Placeholder description="Tag Container" orientation="row">
              <Placeholder description="Tags:" />
              <Placeholder description="Tag 1" />
              <Placeholder description="Tag 2" />
            </Placeholder>
          </Placeholder>
          <Placeholder description="Project Price" />
        </Placeholder>

        <Placeholder description="Individual Project" orientation="row">
          <Placeholder description="Project Image" />
          <Placeholder description="Project Info" orientation="column">
            <Placeholder description="Project Title" orientation="row" />
            <Placeholder description="Tag Container" orientation="row">
              <Placeholder description="Tags:" />
              <Placeholder description="Tag 1" />
              <Placeholder description="Tag 2" />
            </Placeholder>
          </Placeholder>
          <Placeholder description="Project Price" />
        </Placeholder>
      </Placeholder>
    );
  }
}
