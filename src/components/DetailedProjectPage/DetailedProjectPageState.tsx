import { ProjectTag } from "Components/FilterResultsPopUp/FilterResultsProjectTags/ProjectTag/ProjectTag";
import * as React from "react";
import {
  Value,
  Compose as RRCompose,
  Counter,
  Input,
  List,
  Toggle
} from "react-powerplug";

const Compose = RRCompose as any;

export class DetailedProjectPageState extends React.PureComponent<{
  match: { params: { id: string } };
  ownerID: string;
  children: (
    input: {
      projectID: string;
      isOwner: boolean;

      showConfirmationPopup: boolean;
      toggleConfirmationPopup: () => void;
    }
  ) => React.ReactNode;
}> {
  render() {
    const projectID = this.props.match.params.id;

    return (
      // app state
      <Compose components={[Toggle]}>
        {({ on: showConfirmationPopup, toggle: toggleConfirmationPopup }) => {
          return this.props.children({
            projectID,
            isOwner:
              this.props.ownerID === "cc0ce972-7a8d-4ea4-bb87-34186d32b2b4",

            showConfirmationPopup,
            toggleConfirmationPopup
          });
        }}
      </Compose>
    );
  }
}
