import * as React from "react";
import styled from "styled-components";

const ProjectTitleStyle = styled.div``;

export class ProjectTitle extends React.PureComponent<{}> {
  static defaultProps: ProjectTitle["props"] = {};

  render() {
    return <ProjectTitleStyle>Title Goes Here</ProjectTitleStyle>;
  }
}
