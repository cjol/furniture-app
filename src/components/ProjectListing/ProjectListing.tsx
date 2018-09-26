import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import styled from "styled-components";

const ProjectListingStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectImageStyle = styled.div`
  display: flex;
  min-width: 50px;
  min-height: 50px;
  flex-grow: 1;
`;

const AmountStyle = styled.div``;

export class ProjectListing extends React.PureComponent<{}> {
  static defaultProps: ProjectListing["props"] = {};

  render() {
    return (
      <ProjectListingStyle>
        <ProjectImageStyle />
        <ProjectInfo />
        <AmountStyle>Amount</AmountStyle>
      </ProjectListingStyle>
    );
  }
}
