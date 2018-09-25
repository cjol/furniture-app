import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import { ProjectDescription } from "Components/ProjectDescription/ProjectDescription";
import { TaggingProject } from "./TaggingProject/TaggingProject";

export class CreateProjectPage extends React.PureComponent<{}> {
  static defaultProps: CreateProjectPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <ProjectHeader />
        <PhotoContainer />
        <ImageBar />
        <ProjectDescription />
        <TaggingProject />
        <RectangularButton>POST PROJECT</RectangularButton>
      </Placeholder>
    );
  }
}
