import {
  CreateProject as CreateProjectType,
  CreateProjectVariables
} from "@data";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router";

import { CreateProject } from "./CreateProject.gql";

export class CreateProjectButton extends React.PureComponent<{
  title: string;
  description: string;
  tags: string[];
  photos: string[];
}> {
  render() {
    return (
      <Mutation<CreateProjectType, CreateProjectVariables>
        mutation={CreateProject}
        variables={{
          project: {
            title: this.props.title,
            description: this.props.description,
            owner: "cc0ce972-7a8d-4ea4-bb87-34186d32b2b4",
            tags: this.props.tags,
            photos: this.props.photos,
            closeDate: "2020-01-01T00:00:00Z"
          }
        }}
      >
        {(createProject, { data, error, loading, called }) => {
          if (loading) {
            return (
              <RectangularButton onClick={() => {}}>
                CREATING...
              </RectangularButton>
            );
          }
          if (error) {
            return (
              <RectangularButton onClick={() => {}}>Error!</RectangularButton>
            );
          }
          console.log("No error, no loading. called: ", called, "data", data);

          if (called) {
            return <Redirect to={"/project/" + data.createProject.id} />;
          }

          return (
            <RectangularButton onClick={createProject}>
              POST PROJECT
            </RectangularButton>
          );
        }}
      </Mutation>
    );
  }
}
