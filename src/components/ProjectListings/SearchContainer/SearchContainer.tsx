import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Search } from "@material-ui/icons";

export class SearchContainer extends React.PureComponent<{}> {
  static defaultProps: SearchContainer["props"] = {};

  render() {
    return (
      <Placeholder description="SearchContainer" orientation="row">
        <Placeholder description="Search Projects" />
        <Search />
      </Placeholder>
    );
  }
}
