import { AppHeader } from "Components/AppHeader/AppHeader";
import { AboutBid } from "Components/DetailedProjectPage/AboutBid/AboutBid";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import * as React from "react";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import styled from "styled-components";
import { white } from "@style";

const PageStyle = styled.div`
  display: flex;
  font-size: 14px;
  padding: 24px;
  flex-direction: column;
  background-color: ${white};
`;

export class PlaceBidPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  aboutBidProps: AboutBid["props"];
  ImagebarProps: ImageBar["props"];
  placeBidprops: PlaceBid["props"];
}> {
  static defaultProps: PlaceBidPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    projectHeaderProps: ProjectHeader.defaultProps,
    aboutBidProps: AboutBid.defaultProps,
    ImagebarProps: ImageBar.defaultProps,
    placeBidprops: PlaceBid.defaultProps
  };

  render() {
    return (
      <PageStyle>
        <AppHeader {...this.props.appHeaderProps} />
        <ProjectHeader {...this.props.appHeaderProps} />
        <AboutBid {...this.props.appHeaderProps} />
        <ImageBar {...this.props.ImagebarProps} />
        <PlainText>Instructions go here</PlainText>
        <PlaceBid {...this.props.placeBidprops} />
      </PageStyle>
    );
  }
}
