import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { CheckBox } from "@material-ui/icons";
import { CheckBoxOutlineBlank } from "@material-ui/icons";

export class TagsRow1 extends React.PureComponent<{}> {
  static defaultProps: TagsRow1["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsProjectTagsRow1">
        <Placeholder description="FilterResultsProjectTagBed">
          <Placeholder description="FilterResultTagBed" />
          <CheckBox />
        </Placeholder>
        <Placeholder description="FilterResultsProjectTagchair">
          <Placeholder description="FilterResultTagChair" />
          <CheckBox />
        </Placeholder>
        <Placeholder description="FilterResultsProjectTagTable">
          <Placeholder description="FilterResultTagTable" />
          <CheckBoxOutlineBlank />
        </Placeholder>
      </Placeholder>
    );
  }
}
