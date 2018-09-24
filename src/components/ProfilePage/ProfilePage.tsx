import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";

export class ProfilePage extends React.PureComponent<{}> {
  static defaultProps: ProfilePage["props"] = {};

  render() {
    return (
      <Placeholder description="ProfilePageHeader" orientation="column">
        <AppHeader />
        <Placeholder description="ProfileDetails" orientation="column">
          <Placeholder description="Image" />
          <Placeholder description="Ratings" />
          <Placeholder description="FullName">
            <Placeholder description="TextField" />
          </Placeholder>
          <Placeholder description="EmailAddress">
            <Placeholder description="TextField" />
          </Placeholder>
          <Placeholder description="Location">
            <Placeholder description="LocationField" />
          </Placeholder>
          <Placeholder description="PhoneNumber">
            <Placeholder description="PhoneNumberField" />
          </Placeholder>
          <Placeholder description="Password">
            <Placeholder description="PasswordField" />
          </Placeholder>
        </Placeholder>
        <Placeholder description="EditSaveComponent" orientation="row">
          <Placeholder description="EditButton" />
          <Placeholder description="SaveButton" />
        </Placeholder>
        <Placeholder description="Activeprojects/Bids" orientation="row">
          <Placeholder description="Projectdetails">
            <Placeholder description=" ProjectImage" />
            <Placeholder description="ProjectTitle" orientation="column">
              <Placeholder description="Tags" />
            </Placeholder>
            <Placeholder description="Amount" />
          </Placeholder>
        </Placeholder>
        <Placeholder description="SupplierSelected" orientation="row">
          <Placeholder description="Projectdetails">
            <Placeholder description=" ProjectImage" />
            <Placeholder description="ProjectTitle" orientation="column">
              <Placeholder description="Tags" />
            </Placeholder>

            <Placeholder description="Amount" />
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
