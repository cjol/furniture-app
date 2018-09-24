import * as React from "react";
import { Placeholder } from "Components/Placeholder";
export class BidResolutionPage extends React.PureComponent<{}> {
  static defaultProps: BidResolutionPage["props"] = {};

  render() {
    return (
      <Placeholder description="Header" orientation="column">
        <Placeholder description="Sub-Header">
          <Placeholder description="menu" orientation="row" />
          <Placeholder description="Bid Resolution" orientation="row" />
        </Placeholder>
        <Placeholder description="Result" />
        <Placeholder description="Result Message" />
        <Placeholder description="Project Title" />
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
              <Placeholder description="Phone line 1" />
            </Placeholder>

            <Placeholder description="Call sign" orientation="row" />
          </Placeholder>
          <Placeholder description="email">
            <Placeholder description="email address" orientation="row" />
            <Placeholder description="email notation" orientation="row" />
          </Placeholder>
          <Placeholder description="Phone line 2">
            <Placeholder description="Phone No 2" orientation="row" />
            <Placeholder description="call sign" orientation="row" />
          </Placeholder>

          <Placeholder description="Workshop address">
            <Placeholder description="Address" />
          </Placeholder>
        </Placeholder>
        <Placeholder description="Rate" orientation="column">
          <Placeholder description="Rating Supplier" />
          <Placeholder description="Picture" />
          <Placeholder description="no.Of.Stars" />
        </Placeholder>
      </Placeholder>
    );
  }
}
