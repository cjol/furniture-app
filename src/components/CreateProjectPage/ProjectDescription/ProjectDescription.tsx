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
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ProjectDescriptionFieldStyle = styled.textarea`
  font-family: ${mainFont};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${black};
  text-align: justify;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${greenMain};
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  margin-bottom: 16px;
`;
export class ProjectDescription extends React.PureComponent<{
  description: string;
  setDescription: (decsriptionInfo: any) => void;
}> {
  static defaultProps: ProjectDescription["props"] = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl",
    setDescription: descriptionInfo =>
      alert("Enter the description of the item you want" + descriptionInfo)
  };

  render() {
    return (
      <ProjectDescriptionStyle>
        <Subheading> Add Project Description </Subheading>
        <TextContainer>
          <PlainText>
            Make sure to include: what the item is, dimensions, and any material
            preferences (what type of wood/finish).{" "}
          </PlainText>
        </TextContainer>
        <ProjectDescriptionFieldStyle onChange={this.props.setDescription}>
          {this.props.description}
        </ProjectDescriptionFieldStyle>
      </ProjectDescriptionStyle>
    );
  }
}
