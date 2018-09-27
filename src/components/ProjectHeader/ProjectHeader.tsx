import { Placeholder } from "Components/Placeholder";
import { UserDetails } from "Components/UserDetails/UserDetails";
import * as React from "react";
import { greenMain } from "@style";
import { ProjectTitle } from "./ProjectTitle/ProjectTitle";
import styled from "styled-components";

const ProjectHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: ${greenMain};
`;

export class ProjectHeader extends React.PureComponent<{}> {
  static defaultProps: ProjectHeader["props"] = {};

  render() {
    return (
      <ProjectHeaderStyle>
        <ProjectTitle />
        <UserDetails />
      </ProjectHeaderStyle>
    );
  }
}
