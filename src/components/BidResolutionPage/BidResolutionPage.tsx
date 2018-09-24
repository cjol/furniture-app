import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { Star } from "@material-ui/icons";
import { StarBorder } from "@material-ui/icons";
import { Call } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
export class BidResolutionPage extends React.PureComponent<{}> {
  static defaultProps: BidResolutionPage["props"] = {};

  render() {
    return (
      <Placeholder description="Header" orientation="column">
        <AppHeader />
        <Placeholder description="Result" />
        <Placeholder description="Result Message" />
        <Placeholder description="Project Title">
          <Placeholder description="Image" />
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Placeholder>
        <Placeholder description="Cost-Due">
          <Placeholder description="Project Cost" orientation="row" />
          <Placeholder description="Project Due" orientation="row" />
        </Placeholder>

        <Placeholder description="Project Pictures" orientation="row">
          <Placeholder description="<" orientation="row" />
          <Placeholder description="Picture 1" orientation="row" />
          <Placeholder description="Picture 2" orientation="row" />
          <Placeholder description="Picture 3" orientation="row" />
          <Placeholder description=">" orientation="row" />
        </Placeholder>
        <Placeholder description="Carpenter Info" orientation="column">
          <Placeholder description="Contact 1" orientation="row">
            <Placeholder description="Picture" orientation="row" />
            <Placeholder description="name" orientation="row">
              <Call />
            </Placeholder>
            <RoundButton>
              <Call />
            </RoundButton>
          </Placeholder>
          <Placeholder description="email">
            <Email />
            <Placeholder description="email address" orientation="row" />
            <Placeholder description="email notation" orientation="row" />
          </Placeholder>
          <Placeholder description="Phone line 2" orientation="row">
            <Placeholder description="Phone No 2" />
            <Call />
          </Placeholder>

          <Placeholder description="Workshop address">
            <Placeholder description="Address" />
          </Placeholder>
        </Placeholder>
        <Placeholder description="Rate" orientation="column">
          <Placeholder description="Rating Supplier" />
          <Placeholder description="Picture" />
          <Placeholder description="Name of Project Owner" />
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Placeholder>
      </Placeholder>
    );
  }
}
