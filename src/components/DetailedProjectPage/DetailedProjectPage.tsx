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

import { AboutBid } from "./AboutBid/AboutBid";
import { ImageContainer } from "./ImageContainer/ImageContainer";
import { ClarificationBoard } from "./ClarificationBoard/ClarificationBoard";
import { PendingQueries } from "./PendingQueries/PendingQueries";
import { ActiveBids } from "./ActiveBids/ActiveBids";
export class DetailedProjectPage extends React.PureComponent<{}> {
  static defaultProps: DetailedProjectPage["props"] = {};

  render() {
    return (
      <Placeholder description="PageContent" orientation="column">
        <AppHeader />
        <ProjectHeader />
        <AboutBid />
        <ImageContainer />
        <Placeholder description="AddDescription" />

        <ClarificationBoard />
        <PendingQueries />
        <ActiveBids />
        <RectangularButton />
      </Placeholder>
    );
  }
}
