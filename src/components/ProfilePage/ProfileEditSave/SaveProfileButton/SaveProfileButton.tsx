import {
  CreateProject as CreateProjectType,
  CreateProjectVariables
} from "@data";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router";

import { SaveProfile } from "./SaveProfile.gql";
import { SaveProfile as SaveProfileType, SaveProfileVariables } from "@data";

export class SaveProfileButton extends React.PureComponent<{
  email?: string;
  id: string;
  location?: string;
  name?: string;
  phoneNumber?: string;
  pictureURL?: string;
}> {
  static defaultProps: SaveProfileButton["props"] = {
    email: undefined,
    id: "",
    location: undefined,
    name: undefined,
    phoneNumber: undefined,
    pictureURL: undefined
  };

  render() {
    const { email, id, location, name, phoneNumber, pictureURL } = this.props;
    return (
      <Mutation<SaveProfileType, SaveProfileVariables>
        mutation={SaveProfile}
        variables={{
          user: {
            email,
            id,
            location,
            name,
            phoneNumber,
            pictureURL
          }
        }}
      >
        {(saveUser, { data, error, loading, called }) => {
          if (loading) {
            return (
              <RectangularButton onClick={() => {}}>
                UPDATING...
              </RectangularButton>
            );
          }
          if (error) {
            return (
              <RectangularButton onClick={() => {}}>Error!</RectangularButton>
            );
          }

          return <RectangularButton onClick={saveUser}>SAVE</RectangularButton>;
        }}
      </Mutation>
    );
  }
}
