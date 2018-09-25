import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import { CheckBox } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { CheckBoxOutlineBlank } from "@material-ui/icons";

export class FilterResultsPopUp extends React.PureComponent<{}> {
  static defaultProps: FilterResultsPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsPopUp" orientation="column">
        <Placeholder description="FilterResultsHeader">
          <Placeholder description="FilterResultsTitle" />
          <Close />
        </Placeholder>
        <Placeholder description="FilterResultsBid">
          <Placeholder description="FilterResultsBidPrice" />
          <Placeholder description="FilterResultsBidPriceScale" />
        </Placeholder>
        <Placeholder
          description="FilterResultsProjectTags"
          orientation="column"
        >
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
        </Placeholder>
        <RectangularButton>Apply Filter</RectangularButton>
      </Placeholder>
    );
  }
}
