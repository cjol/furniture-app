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
import { FetchDetailedProjectView } from "./FetchDetailedProjectView.gql";
import {
  FetchDetailedProjectView as FetchDetailedProjectViewTypes,
  FetchDetailedProjectViewVariables
} from "@data";
import { Query } from "react-apollo";
import { Loading, DataError } from "Components/Placeholder";

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
      <Query<FetchDetailedProjectViewTypes, FetchDetailedProjectViewVariables>
        query={FetchDetailedProjectView}
        variables={{ ProjID: this.props.match.params.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <DataError />;

          return (
            <DetailedProjectPageState
              match={this.props.match}
              ownerID={data.getProject.owner.id}
            >
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
                          title: data.getProject.title,
                          setTitle: () => {}
                        }}
                        userDetailsProps={{
                          image: data.getProject.owner.pictureURL,
                          profileRatingsProps: {
                            onClick: () => {},
                            rating: data.getProject.owner.rating
                          },
                          userName: data.getProject.owner.name
                        }}
                      />
                      <AboutBid
                        averageBidAmount={
                          data.getProject.averageBidAmount + "UGX"
                        }
                        numberOfBids={data.getProject.numberOfBids}
                        timeUntilEnd={data.getProject.timeUntilClose}
                      />
                      <ImageBar image={data.getProject.photos} />
                      <PlainTextContainer>
                        <PlainText>{data.getProject.description}</PlainText>
                      </PlainTextContainer>

                      <ActiveBids
                        individualBidProps={data.getProject.bids.items.map(
                          bid => ({
                            isOwner: isOwner,
                            activeBidprops: { image: bid.user.pictureURL },
                            bidProps: {
                              amount: bid.price + "UGX",
                              time: bid.time,
                              description: bid.description
                            },

                            rectangularButton: (id: string) => {},
                            id: bid.id,
                            projectID: data.getProject.id
                          })
                        )}
                        isOwner={isOwner}
                        projectID={data.getProject.id}
                      />
                    </PageContentsContainer>
                  </PageContentStyle>
                );
              }}
            </DetailedProjectPageState>
          );
        }}
      </Query>
    );
  }
}
