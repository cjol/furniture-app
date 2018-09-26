import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProfileImage } from "./ProfileImage/ProfileImage";
import { ProfileRatings } from "./ProfileRatings/ProfileRatings";
import { UserCredentials } from "./UserCredentials/UserCredentials";
import styled from "styled-components";
const ProfileDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export class ProfileDetails extends React.PureComponent<{}> {
  static defaultProps: ProfileDetails["props"] = {};

  render() {
    return (
      <ProfileDetailsStyle>
        <ProfileImage />
        <ProfileRatings />
        <UserCredentials />
      </ProfileDetailsStyle>
    );
  }
}
