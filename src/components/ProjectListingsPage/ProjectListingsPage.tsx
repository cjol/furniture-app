import * as React from "react";
import { Placeholder } from "Components/Placeholder";

import { AppHeader } from "Components/AppHeader/AppHeader";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { ListingsContainer } from "./ListingsContainer/ListingsContainer";

export class ProjectListingsPage extends React.PureComponent<{}> {
  static defaultProps: ProjectListingsPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <SearchContainer />
        <ListingsContainer />
      </Placeholder>
    );
  }
}
