import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";
const ProjectTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px, green, solid;
  font: ${mainFont};
  font-size: 24px;
`;

export class ProjectTitle extends React.PureComponent<{}> {
  static defaultProps: ProjectTitle["props"] = {};

  render() {
    return <ProjectTitleStyle>Title Goes Here</ProjectTitleStyle>;
  }
}
