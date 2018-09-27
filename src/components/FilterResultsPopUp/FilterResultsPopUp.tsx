import { Popup } from "Components/Popup/Popup";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { FilterResultsBid } from "./FilterResultsBid/FilterResultsBid";
import { FilterResultsProjectTags } from "./FilterResultsProjectTags/FilterResultsProjectTags";

export class FilterResultsPopUp extends React.PureComponent<{
  filterResultsBid:FilterResultsBid["props"];
  filterResultsProjectTagsProps: FilterResultsProjectTags["props"];
  onClick: () => void;
}> {
  static defaultProps: FilterResultsPopUp["props"] = {
    filterResultsBid:FilterResultsBid.defaultProps,
    filterResultsProjectTagsProps: FilterResultsProjectTags.defaultProps,
    onClick: () => alert("Applying Filter")
  };

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
