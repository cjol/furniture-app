import { CheckBox } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import * as React from "react";
import styled from "styled-components";
const ProjectTagStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectTagLabelStyle = styled.div``;

export class ProjectTag extends React.PureComponent<{
  projectTag: string;
  selected: boolean;
  toggle: () => void;
}> {
  static defaultProps: ProjectTag["props"] = {
    projectTag: "Bed",
    selected: true,
    toggle: () => alert("Selecting tag")
  };

  render() {
    return (
      <ProjectTagStyle>
        <ProjectTagLabelStyle>Bed</ProjectTagLabelStyle>
        <CheckBox />
        {/* <CheckOutlineBlank /> */}
      </ProjectTagStyle>
    );
  }
}
