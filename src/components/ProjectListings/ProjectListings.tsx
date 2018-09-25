import * as React from "react";
import { Placeholder } from "Components/Placeholder";

import { Header } from "./Header/Header";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { ListingsContainer } from "./ListingsContainer/ListingsContainer";

export class ProjectListings extends React.PureComponent<{}> {
  static defaultProps: ProjectListings["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <Header />
        <SearchContainer />
        <ListingsContainer />
      </Placeholder>
    );
  }
}
