import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import styled from "styled-components";

const ProjectListingStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class ProjectListing extends React.PureComponent<{}> {
  static defaultProps: ProjectListing["props"] = {};

  render() {
    return (
      <ProjectListingStyle>
        <Placeholder description="Projectdetails">
          <Placeholder description="ProjectImage" />
          <ProjectInfo />
          <Placeholder description="Amount" />
        </Placeholder>
      </ProjectListingStyle>
    );
  }
}
