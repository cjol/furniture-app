import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProfileEditSave } from "./ProfileEditSave/ProfileEditSave";
import { ActiveProjectBids } from "./ActiveProjectBids/ActiveProjectBids";
import { SupplierSelected } from "./SupplierSelected/SupplierSelected";
import { ProfileDetails } from "./ProfileDetails/ProfileDetails";

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
