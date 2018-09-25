import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class ActiveProjectBids extends React.PureComponent<{}> {
  static defaultProps: ActiveProjectBids["props"] = {};

  render() {
    return (
      <Placeholder description="Activeprojects/Bids" orientation="row">
        <Placeholder description="Projectdetails">
          <Placeholder description=" ProjectImage" />
          <Placeholder description="ProjectTitle" orientation="column">
            <Placeholder description="Tags Container" orientation="row">
              <Placeholder description="Tags: " />
              <Placeholder description="Tag 1" />
              <Placeholder description="Tag 2" />
            </Placeholder>
          </Placeholder>
          <Placeholder description="Amount" />
        </Placeholder>
      </Placeholder>
    );
  }
}
