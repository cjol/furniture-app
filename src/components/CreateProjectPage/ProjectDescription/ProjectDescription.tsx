import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";

export class ProjectDescription extends React.PureComponent<{}> {
  static defaultProps: ProjectDescription["props"] = {};

  render() {
    return (
      <Placeholder description="Project Description" orientation="column">
        <Subheading />
        <PlainText>Description Instructions</PlainText>
        <Placeholder description="Description Field" />
      </Placeholder>
    );
  }
}
