import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";

export class BidDetails extends React.PureComponent<{}> {
  static defaultProps: BidDetails["props"] = {};

  render() {
    return (
      <Placeholder description="BidDetails" orientation="column">
        <Placeholder description="AmountAndDuration">
          <Placeholder description="Amount" />
          <Placeholder description="Time" />
        </Placeholder>
        <PlainText />
      </Placeholder>
    );
  }
}
