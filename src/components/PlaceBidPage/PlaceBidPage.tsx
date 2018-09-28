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
  flex-direction: column;
  background-color: ${white};
`;
const PageContents = styled.div`
  display: flex;
  padding: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
  background-color: ${white};
`;
const TextContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;
export class PlaceBidPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  aboutBidProps: AboutBid["props"];
  ImagebarProps: ImageBar["props"];
  placeBidprops: PlaceBid["props"];

  match: { params: { id: string } };
}> {
  static defaultProps: PlaceBidPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    projectHeaderProps: ProjectHeader.defaultProps,
    aboutBidProps: AboutBid.defaultProps,
    ImagebarProps: ImageBar.defaultProps,
    placeBidprops: PlaceBid.defaultProps,
    match: { params: { id: "100" } }
  };

  render() {
    const projectID = this.props.match.params.id;
    return (
      <PageStyle>
        <AppHeader {...this.props.appHeaderProps} />
        <PageContents>
          <ProjectHeader {...this.props.appHeaderProps} />
          <AboutBid {...this.props.appHeaderProps} />
          <ImageBar {...this.props.ImagebarProps} />
          <TextContainer>
            <PlainText>
              Description of the project. Including item, type of wood,
              dimensions, expected time frame of delivery. Secondary line text
              lorem ipsum dapibus, neque id cursus faucibus.{" "}
            </PlainText>
          </TextContainer>
          <PlaceBid {...this.props.placeBidprops} projectID={projectID} />
        </PageContents>
      </PageStyle>
    );
  }
}
