import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Menu } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";


export class ProjectListings extends React.PureComponent<{}> {
  static defaultProps: ProjectListings["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <Placeholder description="Header" orientation="row">
          <Menu/>
          <Placeholder description="Project Listings" />
        </Placeholder>
        <Placeholder description="SearchContainer" orientation="row">
          <Placeholder description="Search Projects" />
          <Search/>
        </Placeholder>
        <Placeholder description="Listings Container" orientation="column">
          <Placeholder description="Listings Info" orientation="row">
            <Placeholder description="Listings Title" />
            <ArrowDropUp/>
            <ArrowDropDown/>
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
      </Placeholder>
    );
  }
}
