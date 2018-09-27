import { CheckBox } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";
import { greenMain } from "@style";

const CheckBoxStyle = styled(CheckBox)`
color:${greenMain}
display:flex;
align-items: right;
`;

const ProjectTagStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectTagLabelStyle = styled.div`
display:flex;
font-family: ${mainFont};
color: ${greenMain}
font-size: 12px;

`;

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
        <CheckBoxStyle />
        {/* <CheckOutlineBlank /> */}
      </ProjectTagStyle>
    );
  }
}
