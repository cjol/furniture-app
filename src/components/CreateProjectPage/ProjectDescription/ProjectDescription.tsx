import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";

const ProjectDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ProjectDescriptionFieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export class ProjectDescription extends React.PureComponent<{}> {
  static defaultProps: ProjectDescription["props"] = {};

  render() {
    return (
      <ProjectDescriptionStyle>
        <Subheading />
        <PlainText>
          Make sure you include what the item is and the directions{" "}
        </PlainText>
        <ProjectDescriptionFieldStyle>
          Description here
        </ProjectDescriptionFieldStyle>
      </ProjectDescriptionStyle>
    );
  }
}
