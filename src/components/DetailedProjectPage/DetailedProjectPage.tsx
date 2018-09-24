import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";

export class DetailedProjectPage extends React.PureComponent<{}> {
  static defaultProps: DetailedProjectPage["props"] = {};

  render() {
    return (
      <Placeholder description="PageContent" orientation="column">
        <Placeholder description="ProjectView" orientation="column">
          <Placeholder description="ReadMore" />
          <Placeholder description="DetailedProjectView" />
        </Placeholder>
        <ProjectHeader />
        <Placeholder description="AboutBid" orientation="column">
          <Placeholder description="BidInfo" orientation="row">
            <Placeholder description="NoOfBids" />
            <Placeholder description="AverageBid" />
          </Placeholder>
          <Placeholder description="AuctionCloses" />
        </Placeholder>
        <Placeholder description="Image" orientation="row">
          <Placeholder description="Image1" />
          <Placeholder description="Image2" />
          <Placeholder description="Image3" />
        </Placeholder>
        <Placeholder description="AddDescription" />
        <Placeholder description="ClarificationBoard" orientation="column">
          <Placeholder description="ClarificationBoardTitle" />
          <Placeholder description="Question1" orientation="column">
            <Placeholder description="Question1Title" />
            <Placeholder description="Question1Description" />
          </Placeholder>
          <Placeholder description="Question2" orientation="column">
            <Placeholder description="Question2Title" />
            <Placeholder description="Question2Description" />
          </Placeholder>
          <Placeholder description="QuestionMore">
            <Placeholder description="QuestionSubmit" />
            <Placeholder description="QuestionAdd" />
          </Placeholder>
        </Placeholder>

        <Placeholder description="ActiveBids" orientation="column">
          <Placeholder description="ActiveBidsTitle" />
          <Placeholder description="ActiveBidImage" orientation="column">
            <Placeholder description="ActiveBidImage1" />
            <Placeholder description="ActiveBidImage2" />
            <Placeholder description="ActiveBidImage3" />
          </Placeholder>
          <Placeholder description="AmountDurations" orientation="column">
            <Placeholder description="AmountAndDuration" orientation="column">
              <Placeholder description="AmountTime" />
              <Placeholder description="AmountTimeDescription" />
            </Placeholder>
            <Placeholder description="AmountAndDuration" orientation="column">
              <Placeholder description="AmountTime" />
              <Placeholder description="AmountTimeDescription" />
            </Placeholder>
            <Placeholder description="AmountAndDuration" orientation="column">
              <Placeholder description="AmountTime" />
              <Placeholder description="AmountTimeDescription" />
            </Placeholder>
          </Placeholder>
        </Placeholder>
        <Placeholder description="PlaceBid" />
      </Placeholder>
    );
  }
}
