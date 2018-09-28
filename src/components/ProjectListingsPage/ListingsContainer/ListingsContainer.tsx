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
    return (
      <ListingsContainerStyled>
        <ListingsInfo />

        <ProjectListing />

        <ProjectListing />

        <ProjectListing />
      </ListingsContainerStyled>
    );
  }
}
