import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const ProjectTitleStyle = styled.div``;

export class ProjectTitle extends React.PureComponent<{}> {
  static defaultProps: ProjectTitle["props"] = {};

  render() {
    return <ProjectTitleStyle />;
  }
}
