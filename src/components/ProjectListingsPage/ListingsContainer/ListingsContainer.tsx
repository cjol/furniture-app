import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { ListingsInfo } from "./ListingsInfo/ListingsInfo";
import styled from "styled-components";
const ListingsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export class ListingsContainer extends React.PureComponent<{}> {
  static defaultProps: ListingsContainer["props"] = {};

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
