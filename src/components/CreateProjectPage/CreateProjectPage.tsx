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

export class CreateProjectPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  photoContainerProps: PhotoContainer["props"];
  imageBarProps: ImageBar["props"];
  projectDescriptionProps: ProjectDescription["props"];
  taggingProject: TaggingProject["props"];
  onClick: () => void;
}> {
  static defaultProps: CreateProjectPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    projectHeaderProps: ProjectHeader.defaultProps,
    photoContainerProps: PhotoContainer.defaultProps,
    imageBarProps: ImageBar.defaultProps,
    projectDescriptionProps: ProjectDescription.defaultProps,
    taggingProject: TaggingProject.defaultProps,
    onClick: () => alert("Posting Project")
  };

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
