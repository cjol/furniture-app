import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ProfileImage } from "./ProfileImage/ProfileImage";
import { ProfileRatings } from "./ProfileRatings/ProfileRatings";
import { UserCredentials } from "./UserCredentials/UserCredentials";
import styled from "styled-components";
import { greenMain } from "@style";

const ProfileDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
`;
const RatingsContainer = styled.div`
  color: ${greenMain};
  padding-bottom: 12px;
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
        <ProfileImage {...this.props.profileImageprops} />
        <RatingsContainer>
          <ProfileRatings {...this.props.profileRatingsprops} />
        </RatingsContainer>
        <UserCredentials {...this.props.userCredentialsprops} />
      </ProfileDetailsStyle>
    );
  }
}
