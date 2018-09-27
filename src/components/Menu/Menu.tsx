import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class Menu extends React.PureComponent<{}> {
  static defaultProps: Menu["props"] = {};

  render() {
    return (
      <Placeholder description="Menu" orientation="column">
        <Placeholder description="Menu Header" orientation="column">
          <Placeholder description="Profile Picture" />
          <Placeholder description="Name Row" orientation="row">
            <Placeholder description="My Full Name" />
            <Placeholder description="Down Arrow" />
          </Placeholder>
        </Placeholder>
        <Placeholder description="Menu Options">
          <Placeholder description="My Profile Row">
            <Placeholder description="Profile Icon" />
            <Placeholder description="My Profile" />
          </Placeholder>
          <Placeholder description="Create New Project Row">
            <Placeholder description="Create Icon" />
            <Placeholder description="Create New Project" />
          </Placeholder>
          <Placeholder description="Browse Litings Row">
            <Placeholder description="Browse Icon" />
            <Placeholder description="Browse Listings" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
