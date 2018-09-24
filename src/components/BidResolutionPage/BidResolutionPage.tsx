import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Star } from "@material-ui/icons";
import { StarBorder } from "@material-ui/icons";
import { Call, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { ProjectTitle } from "./ProjectTitle/ProjectTitle";
import { CostDue } from "./CostDue/CostDue";
import { ProjectPictures } from "./ProjectPictures/ProjectPictures";
import { CarpenterInfo } from "./CarpenterInfo/CarpenterInfo";
import { RatingSupplier } from "./RatingSupplier/RatingSupplier";
export class BidResolutionPage extends React.PureComponent<{}> {
  static defaultProps: BidResolutionPage["props"] = {};

  render() {
    return (
      <Placeholder description="Header" orientation="column">
        <AppHeader />
        <Placeholder description="Result" />
        <Placeholder description="Result Message" />
        <ProjectTitle />
        <CostDue />
        <ProjectPictures />
        <CarpenterInfo />
        <RatingSupplier />
      </Placeholder>
    );
  }
}
