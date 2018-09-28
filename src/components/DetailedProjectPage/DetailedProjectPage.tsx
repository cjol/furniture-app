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
import { white } from "@style";
import { RouteComponentProps } from "react-router-dom";
import { DetailedProjectPageState } from "./DetailedProjectPageState";

const PageContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
`;
const PageContentsContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const PlainTextContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;
export class DetailedProjectPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  aboutBidProps: AboutBid["props"];
  imageBarProps: ImageBar["props"];
  activeBidsProps: ActiveBids["props"];
  description: string;
  match: any;
}> {
  static defaultProps: DetailedProjectPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    projectHeaderProps: ProjectHeader.defaultProps,
    aboutBidProps: AboutBid.defaultProps,
    imageBarProps: ImageBar.defaultProps,
    activeBidsProps: ActiveBids.defaultProps,
    description:
      "I would like a rustic style kitchen table and two matching benches, similar in style to the pictures attached. It needs to be 2m x 1m. Ideally in oak or similar wood.",
    match: { params: { id: "4" } }
  };

  render() {
    return (
      <DetailedProjectPageState match={this.props.match} ownerID={"123"}>
        {({
          projectID,
          showConfirmationPopup,
          toggleConfirmationPopup,
          isOwner
        }) => {
          return (
            <PageContentStyle>
              <AppHeader {...this.props.appHeaderProps} />
              <PageContentsContainer>
                <ProjectHeader
                  title={{
                    isEditable: false,
                    title: this.props.projectHeaderProps.title.title,
                    setTitle: () => {}
                  }}
                />
                <AboutBid
                  averageBidAmount={"5000 UGX"}
                  numberOfBids={8}
                  timeUntilEnd={"2 Days"}
                />
                <ImageBar image={["https://tyrohq.com/logo"]} />
                <PlainTextContainer>
                  <PlainText>{this.props.description}</PlainText>
                </PlainTextContainer>

                <ActiveBids
                  individualBidProps={
                    ActiveBids.defaultProps.individualBidProps
                  }
                  isOwner={isOwner}
                  projectID={projectID}
                />
              </PageContentsContainer>
            </PageContentStyle>
          );
        }}
      </DetailedProjectPageState>
    );
  }
}
