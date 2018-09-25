import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { CheckBox } from "@material-ui/icons";
import { CheckBoxOutlineBlank } from "@material-ui/icons";

export class TagsRow2 extends React.PureComponent<{}> {
  static defaultProps: TagsRow2["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsProjectTagsRow2">
        <Placeholder description="FilterResultsProjectTagBedSideTable">
          <Placeholder description="FilterResultTagBedSideTable" />
          <CheckBoxOutlineBlank />
        </Placeholder>
        <Placeholder description="FilterResultsProjectTagDesk">
          <Placeholder description="FilterResultTagDesk" />
          <CheckBoxOutlineBlank />
        </Placeholder>
        <Placeholder description="FilterResultsProjectTagSofa">
          <Placeholder description="FilterResultTagSofa" />
          <CheckBoxOutlineBlank />
        </Placeholder>
      </Placeholder>
    );
  }
}
