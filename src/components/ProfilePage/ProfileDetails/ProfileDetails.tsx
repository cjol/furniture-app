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
  margin-top: 24px;
  margin-bottom: 24px;
`;

export class ProfileDetails extends React.PureComponent<{
  profileRatingsprops: ProfileRatings["props"];
  profileImageprops: ProfileImage["props"];
  userCredentialsprops: UserCredentials["props"];
}> {
  static defaultProps: ProfileDetails["props"] = {
    profileRatingsprops: ProfileRatings.defaultProps,
    profileImageprops: ProfileImage.defaultProps,
    userCredentialsprops: UserCredentials.defaultProps
  };

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
