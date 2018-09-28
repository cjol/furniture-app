import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProfileEditSave } from "./ProfileEditSave/ProfileEditSave";
import { ActiveProjectBids } from "./ActiveProjectBids/ActiveProjectBids";
import { SuppliersSelected } from "./SuppliersSelected/SuppliersSelected";
import { ProfileDetails } from "./ProfileDetails/ProfileDetails";
import styled from "styled-components";
import { white } from "@style";
import { ProfilePageState } from "./ProfilePageState";

const ProfilePageHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
`;

const PageContents = styled.div`
  padding: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${white};
`;
export class ProfilePage extends React.PureComponent<{
  AppHeaderprops: AppHeader["props"];
  ProfileEditSaveprops: ProfileEditSave["props"];
  ActiveProjectBidsprops: ActiveProjectBids["props"];
  SuppliersSelectedprops: SuppliersSelected["props"];
}> {
  static defaultProps: ProfilePage["props"] = {
    AppHeaderprops: AppHeader.defaultProps,
    ProfileEditSaveprops: ProfileEditSave.defaultProps,
    ActiveProjectBidsprops: ActiveProjectBids.defaultProps,
    SuppliersSelectedprops: SuppliersSelected.defaultProps
  };

  render() {
    return (
      <ProfilePageState>
        {({
          fullName,
          setFullName,

          pictureURL,
          setPictureURL,

          email,
          setEmail,

          location,
          setLocation,

          phoneNumber,
          setPhoneNumber
        }) => {
          return (
            <ProfilePageHeaderStyle>
              <AppHeader />
              <PageContents>
                <ProfileDetails
                  profileImageprops={{ image: pictureURL }}
                  userCredentialsprops={{
                    isEditMode: true,
                    fullName,
                    setFullName,
                    pictureURL,
                    setPictureURL,
                    email,
                    setEmail,
                    phoneNumber,
                    setPhoneNumber,
                    location,
                    setLocation
                  }}
                />
                <ProfileEditSave />
                <ActiveProjectBids />
                <SuppliersSelected />
              </PageContents>
            </ProfilePageHeaderStyle>
          );
        }}
      </ProfilePageState>
    );
  }
}
