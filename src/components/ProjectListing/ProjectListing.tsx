import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  mainFont,
  grey,
  whiteButtonColor,
  squareButtonRadius,
  normalBoxShadow
} from "@style";

const ProjectListingStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${mainFont};
  padding: 16px;
  background-color: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
  border-radius: ${squareButtonRadius};
`;

const ProjectImageStyle = styled.div`
  display: flex;
  min-width: 50px;
  min-height: 50px;
  flex-grow: 1;
`;

const AmountStyle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${grey};
`;

export class ProjectListing extends React.PureComponent<{
  id: string;
  projectImage: string;
  projectInfoProps: ProjectInfo["props"];
  amountTitle: number;
}> {
  static defaultProps: ProjectListing["props"] = {
    id: "123",
    projectImage: "https://tyrohq.com/apple-touch-icon.png",

    projectInfoProps: ProjectInfo.defaultProps,
    amountTitle: 1000
  };

  render() {
    return (
      <Link to={"/project/" + this.props.id}>
        <ProjectListingStyle>
          <ProjectImageStyle />
          <ProjectInfo />
          <AmountStyle>Amount</AmountStyle>
        </ProjectListingStyle>
      </Link>
    );
  }
}
