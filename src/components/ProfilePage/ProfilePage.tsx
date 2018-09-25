import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProfileEditSave } from "Components/ProfilePage/ProfileEditSave/ProfileEditSave";
import { ActiveProjectBids } from "Components/ProfilePage/ActiveProjectBids/ActiveProjectBids";
import { SupplierSelected } from "Components/ProfilePage/SupplierSelected/SupplierSelected";
import { ProfileDetails } from "Components/ProfilePage/ProfileDetails/ProfileDetails";

export class ProfilePage extends React.PureComponent<{}> {
  static defaultProps: ProfilePage["props"] = {};

  render() {
    return (
      <Placeholder description="ProfilePageHeader" orientation="column">
        <AppHeader />
        <ProfileDetails />
        <ProfileEditSave />
        <ActiveProjectBids />
        <SupplierSelected />
      </Placeholder>
    );
  }
}
