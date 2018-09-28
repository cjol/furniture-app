import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import * as React from "react";
import styled from "styled-components";
import { mainFont, normalBoxShadow, whiteButtonColor } from "@style";
import { greenMain, greyButtonColor } from "@style";

const CheckBoxEmptyStyle = styled(CheckBoxOutlineBlank)`
  color: ${greenMain};
  display: flex;
  align-items: right;
`;

const CheckBoxStyle = styled(CheckBox)`
  color: ${greenMain};
  display: flex;
  align-items: right;
`;

const ProjectTagStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin: 4px;
  background-color: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
  min-width: 100px;
`;

const ProjectTagLabelStyle = styled.div`
  display: flex;
  font-family: ${mainFont};
  color: ${greenMain};
  font-size: 12px;
  align-items: left;
  margin-right: 12px;
  flex-grow: 1;
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
    if (this.props.selected) {
      return (
        <ProjectTagStyle>
          <ProjectTagLabelStyle>{this.props.projectTag}</ProjectTagLabelStyle>
          <CheckBoxStyle onClick={this.props.toggle} />
          {/* <CheckBoxEmptyStyle /> */}
        </ProjectTagStyle>
      );
    } else {
      return (
        <ProjectTagStyle>
          <ProjectTagLabelStyle>{this.props.projectTag}</ProjectTagLabelStyle>
          <CheckBoxEmptyStyle onClick={this.props.toggle} />
          {/* <CheckBoxStyle /> */}
        </ProjectTagStyle>
      );
    }
  }
}
