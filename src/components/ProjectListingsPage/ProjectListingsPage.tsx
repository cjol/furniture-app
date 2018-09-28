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
export class ProjectListingsPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  listingsContainerProps: ListingsContainer["props"];
}> {
  static defaultProps: ProjectListingsPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    listingsContainerProps: ListingsContainer.defaultProps
  };

  render() {
    return (
      <PageStyle>
        <AppHeader {...this.props.appHeaderProps} />
        <PageContents>
          <SearchContainer />
          <ListingsContainer {...this.props.listingsContainerProps} />
        </PageContents>
      </PageStyle>
    );
  }
}
