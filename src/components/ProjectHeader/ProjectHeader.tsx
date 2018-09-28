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
  color: white;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const UserDetailsContainer = styled.div`
  padding: 16px;
  background-color: ${greenMain};
`;

export class ProjectHeader extends React.PureComponent<{
  title: string;
  userDetailsProps: UserDetails["props"];
}> {
  static defaultProps: ProjectHeader["props"] = {
    title: "Project Title",
    userDetailsProps: UserDetails.defaultProps
  };

  render() {
    return (
      <ProjectHeaderStyle>
        <ProjectTitle />
        <UserDetailsContainer>
          <UserDetails />
        </UserDetailsContainer>
      </ProjectHeaderStyle>
    );
  }
}
