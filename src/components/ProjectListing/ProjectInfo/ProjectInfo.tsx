import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagsContainer } from "./TagsContainer/TagsContainer";
import styled from "styled-components";
const ProjectInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProjectTitleStyle = styled.div``;

export class ProjectInfo extends React.PureComponent<{}> {
  static defaultProps: ProjectInfo["props"] = {};

  render() {
    return (
      <ProjectInfoStyle>
        <ProjectTitleStyle> Project Title</ProjectTitleStyle>
        <TagsContainer />
      </ProjectInfoStyle>
    );
  }
}
