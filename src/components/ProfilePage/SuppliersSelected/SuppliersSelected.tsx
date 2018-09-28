import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";

const SuppliersSelectedStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 24px;
`;
export class SuppliersSelected extends React.PureComponent<{
  listingsProps: ProjectListing["props"][];
}> {
  static defaultProps: SuppliersSelected["props"] = {
    listingsProps: [ProjectListing.defaultProps, ProjectListing.defaultProps]
  };

  render() {
    return (
      <SuppliersSelectedStyled>
        <Subheading>Suppliers Selected</Subheading>
        <ProjectListing />
        <ProjectListing />
        <ProjectListing />
      </SuppliersSelectedStyled>
    );
  }
}
