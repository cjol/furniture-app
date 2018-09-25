import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ChevronLeft } from "@material-ui/icons";
import { ChevronRight } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { PlaceBidPage } from "Components/PlaceBidPage/PlaceBidPage";

export class DetailedProjectPage extends React.PureComponent<{}> {
  static defaultProps: DetailedProjectPage["props"] = {};

  render() {
    return (
      <Placeholder description="PageContent" orientation="column">
        <AppHeader>
          <Placeholder description="ReadMore" />
          <Placeholder description="DetailedProjectView" />
        </AppHeader>
        <ProjectHeader />
        <Placeholder description="AboutBid" orientation="column">
          <Placeholder description="BidInfo" orientation="row">
            <Placeholder description="NoOfBids" />
            <Placeholder description="AverageBid" />
          </Placeholder>
          <Placeholder description="AuctionCloses" />
        </Placeholder>
        <Placeholder description="Image" orientation="row">
          <ChevronLeft />
          <Placeholder description="Image1" />
          <Placeholder description="Image2" />
          <Placeholder description="Image3" />
          <ChevronRight />
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
            <RoundButton />
          </Placeholder>
        </Placeholder>
        <Placeholder description="PendingQueries" orientation="column">
          <Placeholder description="PendingQueriesTitle" />
          <Placeholder description="PendingQueriesQuestion" />
          <Placeholder description="PendingQueriesAnswer" />
        </Placeholder>
        <Placeholder description="ActiveBids" orientation="column">
          <Placeholder description="ActiveBidsTitle" />
          <Placeholder description="arrows" orientation="row">
            <ArrowDropDown />
            <ArrowDropUp />
          </Placeholder>

          <Placeholder description="AmountDurations" orientation="row">
            <Placeholder description="ActiveBidImage1" />
            <Placeholder description="AmountAndDuration" orientation="column">
              <Placeholder description="AmountTime" />
              <Placeholder description="AmountTimeDescription" />
            </Placeholder>
            <RectangularButton />
          </Placeholder>
          <Placeholder description="IndividualBid" orientation="row">
            <Placeholder description="ActiveBidImage2" />
            <Placeholder description="AmountAndDuration" orientation="column">
              <Placeholder description="Amount" />
              <Placeholder description="Time" />
              <Placeholder description="AmountTimeDescription" />
            </Placeholder>
            <RectangularButton />
          </Placeholder>
          <Placeholder description="IndividualBid" orientation="row">
            <Placeholder description="ActiveBidImage3" />
            <Placeholder description="IndividulBid" orientation="column">
              <Placeholder description="AmountTime" />
              <Placeholder description="AmountTimeDescription" />
            </Placeholder>
            <RectangularButton />
          </Placeholder>
        </Placeholder>
        <PlaceBidPage />" />
      </Placeholder>
    );
  }
}
