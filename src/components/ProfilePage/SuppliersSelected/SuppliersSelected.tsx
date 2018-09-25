import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectListing } from "Components/ProjectListing/ProjectListing";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";

const SuppliersSelectedStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export class SuppliersSelected extends React.PureComponent<{}> {
  static defaultProps: SuppliersSelected["props"] = {};

  render() {
    return (
      <SuppliersSelectedStyled>
        <Subheading />
        <ProjectListing />
        <ProjectListing />
        <ProjectListing />
      </SuppliersSelectedStyled>
    );
  }
}
