import { black, grey, mainFont } from "@style";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const ProjectDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: ${mainFont};
  font-size: 16px;
  color: ${grey};
  text-align: justify;
`;

const ProjectDescriptionFieldStyle = styled.textarea`
  font-family: ${mainFont};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${mainFont};
  font-size: 13px;
  color: ${black};
  text-align: justify;
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
