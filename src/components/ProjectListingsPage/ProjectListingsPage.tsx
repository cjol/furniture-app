import * as React from "react";
import { Placeholder } from "Components/Placeholder";

import { AppHeader } from "Components/AppHeader/AppHeader";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { ListingsContainer } from "./ListingsContainer/ListingsContainer";
import styled from "styled-components";
const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class ProjectListingsPage extends React.PureComponent<{}> {
  static defaultProps: ProjectListingsPage["props"] = {};

  render() {
    return (
      <PageStyle>
        <AppHeader />
        <SearchContainer />
        <ListingsContainer />
      </PageStyle>
    );
  }
}
