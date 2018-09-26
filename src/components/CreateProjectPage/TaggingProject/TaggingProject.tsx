import { FilterResultsProjectTags } from "Components/FilterResultsPopUp/FilterResultsProjectTags/FilterResultsProjectTags";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";

export class TaggingProject extends React.PureComponent<{}> {
  static defaultProps: TaggingProject["props"] = {};

  render() {
    return (
      <Placeholder description="Tagging Project" orientation="column">
        <Subheading />
        <PlainText />
        <FilterResultsProjectTags />
      </Placeholder>
    );
  }
}
