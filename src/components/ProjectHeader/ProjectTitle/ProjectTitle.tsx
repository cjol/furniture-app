import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";
import { darkerGreen, white } from "@style";

const ProjectTitleEditableStyle = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font: ${mainFont};
  color: ${white};
  font-size: 24px;
  padding: 16px;
  background-color: ${darkerGreen};
  border: none;
  border-bottom-width: 2px;
  border-bottom-color: white;
  border-bottom-style: solid;
`;

const ProjectTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font: ${mainFont};
  font-size: 24px;
  padding: 16px;
  background-color: ${darkerGreen};
  color: ${white};
`;

export class ProjectTitle extends React.PureComponent<{
  title: string;
  isEditable: boolean;
  setTitle: (title: any) => void;
}> {
  static defaultProps: ProjectTitle["props"] = {
    title: "title goes here",
    isEditable: true,
    setTitle: title => alert("Setting title!")
  };

  render() {
    return (
      <ProjectTitleEditableStyle>Title Goes Here</ProjectTitleEditableStyle>
    );
  }
}
