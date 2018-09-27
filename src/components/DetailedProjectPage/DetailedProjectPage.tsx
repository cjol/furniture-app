import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { AboutBid } from "./AboutBid/AboutBid";
import { ActiveBids } from "./ActiveBids/ActiveBids";
import { ClarificationBoard } from "./ClarificationBoard/ClarificationBoard";
import { PendingQueries } from "./PendingQueries/PendingQueries";
import { PlainText } from "Components/PlainText/PlainText";
import styled from "styled-components";

const PageContentStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class DetailedProjectPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  aboutBidProps: AboutBid["props"];
  imageBarProps: ImageBar["props"];
  activeBidsProps: ActiveBids["props"];
  description: string;
}> {
  static defaultProps: DetailedProjectPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    projectHeaderProps: ProjectHeader.defaultProps,
    aboutBidProps: AboutBid.defaultProps,
    imageBarProps: ImageBar.defaultProps,
    activeBidsProps: ActiveBids.defaultProps,
    description: "Project description goes here"
  };

  render() {
    return (
      <PageContentStyle>
        <AppHeader {...this.props.appHeaderProps} />
        <ProjectHeader {...this.props.projectHeaderProps} />
        <AboutBid {...this.props.aboutBidProps} />
        <ImageBar {...this.props.imageBarProps} />
        <PlainText>Project Description</PlainText>

        <ActiveBids {...this.props.activeBidsProps} />
      </PageContentStyle>
    );
  }
}
