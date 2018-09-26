import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProfileEditSave } from "./ProfileEditSave/ProfileEditSave";
import { ActiveProjectBids } from "./ActiveProjectBids/ActiveProjectBids";
import { SuppliersSelected } from "./SuppliersSelected/SuppliersSelected";
import { ProfileDetails } from "./ProfileDetails/ProfileDetails";
import styled from "styled-components";
const ProfilePageHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class ProfilePage extends React.PureComponent<{}> {
  static defaultProps: ProfilePage["props"] = {};

  render() {
    return (
      <ProfilePageHeaderStyle>
        <AppHeader />
        <ProfileDetails />
        <ProfileEditSave />
        <ActiveProjectBids />
        <SuppliersSelected />
      </ProfilePageHeaderStyle>
    );
  }
}
