import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { CheckBox } from "@material-ui/icons";
import { CheckBoxOutlineBlank } from "@material-ui/icons";

export class FilterResultsProjectTags extends React.PureComponent<{}> {
  static defaultProps: FilterResultsProjectTags["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsProjectTags" orientation="column">
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
