import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProfileImage } from "./ProfileImage/ProfileImage";
import { ProfileRatings } from "./ProfileRatings/ProfileRatings";
import { UserCredentials } from "./UserCredentials/UserCredentials";

export class ProfileDetails extends React.PureComponent<{}> {
  static defaultProps: ProfileDetails["props"] = {};

  render() {
    return (
      <Placeholder description="ProfileDetails" orientation="column">
        <ProfileImage />
        <ProfileRatings />
        <UserCredentials />
      </Placeholder>
    );
  }
}
