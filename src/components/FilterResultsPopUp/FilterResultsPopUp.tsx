import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { FilterResultsHeader } from "./FilterResultsHeader/FilterResultsHeader";
import { FilterResultsBid } from "./FilterResultsBid/FilterResultsBid";
import { FilterResultsProjectTags } from "./FilterResultsProjectTags/FilterResultsProjectTags";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class FilterResultsPopUp extends React.PureComponent<{}> {
  static defaultProps: FilterResultsPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsPopUp" orientation="column">
        <FilterResultsHeader />
        <FilterResultsBid />
        <FilterResultsProjectTags />
        <RectangularButton>Apply Filter</RectangularButton>
      </Placeholder>
    );
  }
}
