import * as React from "react";
import { Placeholder } from "Components/Placeholder";

import { AppHeader } from "Components/AppHeader/AppHeader";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { ListingsContainer } from "./ListingsContainer/ListingsContainer";
import styled from "styled-components";
import { white } from "@style";
import {FetchProjectListings} from "./FetchProjectListings.gql";
import {FetchProjectListings as FetchProjectListingsType} from "@data";
import {Query} from "react-apollo";
import {Loading, DataError,} from "Components/Placeholder";

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
      <Query<FetchProjectListingsType> query={FetchProjectListings}>
      
      {({loading, error, data}) => {
        if (loading) return <Loading/>;
        if (error) return <DataError/>;

        const listings = data.listProjects.items.map(item => {
          return {
            id: item.id,
            projectImage: item.photos[0],
            amountTitle:item.averageBidAmount,
            projectInfoProps:{
              title: item.title,
              tagsContainerProps: {
                tags: item.tags
              }
            },
            chosenBid: item.averageBidAmount

          }
        })

      return <PageStyle>
        <AppHeader {...this.props.appHeaderProps} />
        <PageContents>
          <SearchContainer />
          <ListingsContainer 
          projectListingProps={listings} />
        </PageContents>
     
     </PageStyle>
      }}
     </Query>
    );
  }
}
