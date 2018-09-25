import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Search } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";

export class SearchContainer extends React.PureComponent<{}> {
  static defaultProps: SearchContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Search header" orientation="row">
        <Subheading />
        <Search />
      </Placeholder>
    );
  }
}
