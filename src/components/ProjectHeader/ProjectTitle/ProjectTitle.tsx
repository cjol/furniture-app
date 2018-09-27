import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";
import { darkerGreen } from "@style";

const ProjectTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font: ${mainFont};
  font-size: 24px;
  padding: 16px;
  background-color: ${darkerGreen};
`;

export class ProjectTitle extends React.PureComponent<{
  title: string;
  isEditable: boolean;
}> {
  static defaultProps: ProjectTitle["props"] = {
    title: "title goes here",
    isEditable: true
  };

  render() {
    return <ProjectTitleStyle>Title Goes Here</ProjectTitleStyle>;
  }
}
