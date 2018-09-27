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
import { white } from "@style";

const CreateProjectPageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${white};
`;

export class CreateProjectPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  photoContainerProps: PhotoContainer["props"];
  imageBarProps: ImageBar["props"];
  projectDescriptionProps: ProjectDescription["props"];
  taggingProjectProps: TaggingProject["props"];
  onClick: () => void;
}> {
  static defaultProps: CreateProjectPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    projectHeaderProps: ProjectHeader.defaultProps,
    photoContainerProps: PhotoContainer.defaultProps,
    imageBarProps: ImageBar.defaultProps,
    projectDescriptionProps: ProjectDescription.defaultProps,
    taggingProjectProps: TaggingProject.defaultProps,
    onClick: () => alert("Posting Project")
  };

  render() {
    return (
      <CreateProjectPageStyle>
        <AppHeader {...this.props.appHeaderProps} />
        <PageContents>
          <ProjectHeader {...this.props.projectHeaderProps} />
          <PhotoContainer {...this.props.photoContainerProps} />
          <ImageBar {...this.props.imageBarProps} />
          <ProjectDescription {...this.props.projectDescriptionProps} />
          <TaggingProject {...this.props.taggingProjectProps} />
          <RectangularButton onClick={this.props.onClick}>
            POST PROJECT
          </RectangularButton>
        </PageContents>
      </CreateProjectPageStyle>
    );
  }
}
