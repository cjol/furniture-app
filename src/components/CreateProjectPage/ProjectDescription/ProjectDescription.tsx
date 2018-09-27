import { black, grey, mainFont, greenMain } from "@style";
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
  margin-top: 24px;
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
  border-block-start-style: solid;
  border-bottom: 2px;
  border-bottom-color: ${greenMain};
  padding-bottom: 10px;
`;

export class ProjectDescription extends React.PureComponent<{
  description: string;
  setDescription: (decsriptionInfo: any) => void;
}> {
  static defaultProps: ProjectDescription["props"] = {
    description: "Make sure you include what the item is and the directions",
    setDescription: descriptionInfo =>
      alert("Enter the description of the item you want" + descriptionInfo)
  };

  render() {
    return (
      <ProjectDescriptionStyle>
        <Subheading />
        <PlainText>
          Make sure you include what the item is and the directions{" "}
        </PlainText>
        <ProjectDescriptionFieldStyle onChange={this.props.setDescription}>
          {this.props.description}
        </ProjectDescriptionFieldStyle>
      </ProjectDescriptionStyle>
    );
  }
}
