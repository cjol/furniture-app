import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import { TaggingProject } from "./TaggingProject/TaggingProject";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import styled from "styled-components";

const CreateProjectPageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class CreateProjectPage extends React.PureComponent<{}> {
  static defaultProps: CreateProjectPage["props"] = {};

  render() {
    return (
      <CreateProjectPageStyle>
        <AppHeader />
        <ProjectHeader />
        <PhotoContainer />
        <ImageBar />
        <ProjectDescription />
        <TaggingProject />
        <RectangularButton>POST PROJECT</RectangularButton>
      </CreateProjectPageStyle>
    );
  }
}
