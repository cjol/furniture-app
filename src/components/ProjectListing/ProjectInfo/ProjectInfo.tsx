import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagsContainer } from "./TagsContainer/TagsContainer";
import styled from "styled-components";
import { mainFont } from "@style";
import { black } from "@style";

const ProjectInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  flex-grow: 1;
`;
const ProjectTitleStyle = styled.div`
  display: flex;
  font-family: ${mainFont};
  font-size: 18px;
  color: ${black};
  font-weight: bold;
  margin-bottom: 4px;
`;

export class ProjectInfo extends React.PureComponent<{
  title: string;
  tagsContainerProps: TagsContainer["props"];
}> {
  static defaultProps: ProjectInfo["props"] = {
    title: "Project Title",
    tagsContainerProps: TagsContainer.defaultProps
  };

  render() {
    return (
      <ProjectInfoStyle>
        <ProjectTitleStyle>{this.props.title}</ProjectTitleStyle>
        <TagsContainer {...this.props.tagsContainerProps}/>
      </ProjectInfoStyle>
    );
  }
}
