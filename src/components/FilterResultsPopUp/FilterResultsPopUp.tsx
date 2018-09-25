import { Popup } from "Components/Popup/Popup";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { FilterResultsBid } from "./FilterResultsBid/FilterResultsBid";
import { FilterResultsProjectTags } from "./FilterResultsProjectTags/FilterResultsProjectTags";

export class FilterResultsPopUp extends React.PureComponent<{}> {
  static defaultProps: FilterResultsPopUp["props"] = {};

  render() {
    return (
      <Popup>
        <FilterResultsBid />
        <FilterResultsProjectTags />
        <RectangularButton>Apply Filter</RectangularButton>
      </Popup>
    );
  }
}
