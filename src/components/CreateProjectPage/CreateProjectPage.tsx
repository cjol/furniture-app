import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import { ImagesAvailable } from "./ImagesAvailable/ImagesAvailable";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { TaggingProject } from "./TaggingProject/TaggingProject";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
export class CreateProjectPage extends React.PureComponent<{}> {
  static defaultProps: CreateProjectPage["props"] = {};

  render() {
    return (
      <Placeholder description="Page" orientation="column">
        <AppHeader />
        <ProjectHeader />
        <PhotoContainer />
        <ImagesAvailable />
        <ProjectDescription />
        <TaggingProject />
        <RectangularButton>POST PROJECT</RectangularButton>
      </Placeholder>
    );
  }
}
