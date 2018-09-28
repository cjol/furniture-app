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
  appHeaderProps: AppHeader["props"];
  profileEditSaveProps: ProfileEditSave["props"];
  activeProjectBidsProps: ActiveProjectBids["props"];
  suppliersSelectedProps: SuppliersSelected["props"];
}> {
  static defaultProps: ProfilePage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    profileEditSaveProps: ProfileEditSave.defaultProps,
    activeProjectBidsProps: ActiveProjectBids.defaultProps,
    suppliersSelectedProps: SuppliersSelected.defaultProps
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
              <AppHeader {...this.props.appHeaderProps} />
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
                <ProfileEditSave {...this.props.profileEditSaveProps} />
                <ActiveProjectBids {...this.props.activeProjectBidsProps} />
                <SuppliersSelected {...this.props.suppliersSelectedProps} />
              </PageContents>
            </ProfilePageHeaderStyle>
          );
        }}
      </ProfilePageState>
    );
  }
}
