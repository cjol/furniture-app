import { Placeholder } from "Components/Placeholder";
import { ProfileRatings } from "Components/ProfilePage/ProfileDetails/ProfileRatings/ProfileRatings";
import * as React from "react";

export class UserDetails extends React.PureComponent<{}> {
  static defaultProps: UserDetails["props"] = {};

  render() {
    return (
      <Placeholder description="User Details" orientation="column">
        <Placeholder description="User Picture" />
        <Placeholder description="User Name" />
        <ProfileRatings />
      </Placeholder>
    );
  }
}
