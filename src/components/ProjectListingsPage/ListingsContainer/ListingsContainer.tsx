import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { ListingsInfo } from "./ListingsInfo/ListingsInfo";
import styled from "styled-components";

const ListingsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export class ListingsContainer extends React.PureComponent<{
  listingsInfoProps: ListingsInfo["props"];
  projectListingProps: ProjectListing["props"][];
}> {
  static defaultProps: ListingsContainer["props"] = {
    listingsInfoProps: ListingsInfo.defaultProps,
    projectListingProps: [
      ProjectListing.defaultProps,
      ProjectListing.defaultProps,
      ProjectListing.defaultProps
    ]
  };

  render() {
    const ProjectListingComponents = this.props.projectListingProps.map(
      listingsProp => {
        return <ProjectListing {...listingsProp} />;
      }
    );
    return (
      <ListingsContainerStyled>
        <ListingsInfo {...this.props.listingsInfoProps} />

        {ProjectListingComponents}
      </ListingsContainerStyled>
    );
  }
}
