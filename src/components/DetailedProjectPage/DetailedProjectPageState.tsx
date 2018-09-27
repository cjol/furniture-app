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
  children: (
    input: {
      projectID: string;

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

            showConfirmationPopup,
            toggleConfirmationPopup
          });
        }}
      </Compose>
    );
  }
}
