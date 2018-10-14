import * as React from "react";
import styled from "styled-components";

const ProjectDetailsTagStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const LabelStyle = styled.div``;

const ValueStyle = styled.div``;

export class ProjectDetailsTag extends React.PureComponent<{}> {
  static defaultProps: ProjectDetailsTag["props"] = {};

  render() {
    return ProjectDetailsTagStyle;
  }
}
