import * as React from "react";
import { Placeholder } from "Components/Placeholder";

import { AppHeader } from "Components/AppHeader/AppHeader";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { ListingsContainer } from "./ListingsContainer/ListingsContainer";
import styled from "styled-components";
import { white } from "@style";

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContents = styled.div`
  padding: 24px;
  background-color: ${white};
  padding-top: 12px;
  padding-bottom: 24px;
`;
export class ProjectListingsPage extends React.PureComponent<{}> {
  static defaultProps: ProjectListingsPage["props"] = {};

  render() {
    return (
      <PageStyle>
        <AppHeader />
        <PageContents>
          <SearchContainer />
          <ListingsContainer />
        </PageContents>
      </PageStyle>
    );
  }
}
