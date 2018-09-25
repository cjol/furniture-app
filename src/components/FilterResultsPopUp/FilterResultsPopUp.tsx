import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import { CheckBox } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

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
              <CheckBox />
            </Placeholder>
          </Placeholder>
          <Placeholder description="FilterResultsProjectTagsRow2">
            <Placeholder description="FilterResultsProjectTagBedSideTable">
              <Placeholder description="FilterResultTagBedSideTable" />
              <CheckBox />
            </Placeholder>
            <Placeholder description="FilterResultsProjectTagDesk">
              <Placeholder description="FilterResultTagDesk" />
              <CheckBox />
            </Placeholder>
            <Placeholder description="FilterResultsProjectTagSofa">
              <Placeholder description="FilterResultTagSofa" />
              <CheckBox />
            </Placeholder>
          </Placeholder>
        </Placeholder>
        <RectangularButton>ApplyFilterButton</RectangularButton>
      </Placeholder>
    );
  }
}
