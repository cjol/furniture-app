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
import { BidSubmitted } from "Components/BidSubmitted/BidSubmitted";
import { DetailedProjectPageState } from "./DetailedProjectPageState";

const PageContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${white};
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
    description: "Project description goes here",
    match: { params: { id: "4" } }
  };

  render() {
    return (
      <DetailedProjectPageState match={this.props.match}>
        {({ projectID, showConfirmationPopup, toggleConfirmationPopup }) => {
          return (
            <PageContentStyle>
              <BidSubmitted
                title="My Project"
                popup={{
                  show: showConfirmationPopup,
                  headerProps: {
                    closeFunction: toggleConfirmationPopup,
                    title: "Bid Submitted"
                  }
                }}
              />
              <AppHeader title={"Place Bid"} />
              <ProjectHeader />
              <AboutBid
                averageBidAmount={"5000 UGX"}
                numberOfBids={8}
                timeUntilEnd={"2 Days"}
              />
              <ImageBar image={["https://tyrohq.com/logo"]} />
              <PlainText>{this.props.description}</PlainText>

              <ActiveBids individualBidProps={[]} projectID={projectID} />
            </PageContentStyle>
          );
        }}
      </DetailedProjectPageState>
    );
  }
}
