import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";
import { darkerGreen, white } from "@style";

const ProjectTitleEditableStyle = styled.input`
  border: none;
  background-color: transparent;
  font: ${mainFont};
  font-size: 24px;
  color: ${white};
  text-align: center;
  border-bottom-width: 2px;
  border-bottom-color: white;
  border-bottom-style: solid;
`;

const ProjectTitleEditableContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  background-color: ${darkerGreen};
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
    if (this.props.isEditable) {
      return (
        <ProjectTitleEditableContainerStyle>
          <ProjectTitleEditableStyle
            value={this.props.title}
            onChange={this.props.setTitle}
          />
        </ProjectTitleEditableContainerStyle>
      );
    } else {
      return <ProjectTitleStyle>{this.props.title}</ProjectTitleStyle>;
    }
  }
}
