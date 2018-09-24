import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagsContainer } from "./TagsContainer/TagsContainer";

export class ActiveProjectBids extends React.PureComponent<{}> {
  static defaultProps: ActiveProjectBids["props"] = {};

  render() {
    return (
      <Placeholder description="Activeprojects/Bids" orientation="row">
        <Placeholder description="Projectdetails">
          <Placeholder description=" ProjectImage" />
          <Placeholder description="ProjectTitle" orientation="column">
            <TagsContainer />
          </Placeholder>
          <Placeholder description="Amount" />
        </Placeholder>
      </Placeholder>
    );
  }
}
