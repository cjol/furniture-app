import { Popup } from "Components/Popup/Popup";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { FilterResultsBid } from "./FilterResultsBid/FilterResultsBid";
import { FilterResultsProjectTags } from "./FilterResultsProjectTags/FilterResultsProjectTags";

export class FilterResultsPopUp extends React.PureComponent<{
  filterResultsBidProps:FilterResultsBid["props"];
  filterResultsProjectTagsProps: FilterResultsProjectTags["props"];
  onClick: () => void;
}> {
  static defaultProps: FilterResultsPopUp["props"] = {
    filterResultsBidProps:FilterResultsBid.defaultProps,
    filterResultsProjectTagsProps: FilterResultsProjectTags.defaultProps,
    onClick: () => alert("Applying Filter")
  };

  render() {
    return (
      <Popup>
        <FilterResultsBid {...this.props.filterResultsBidProps}/>
        <FilterResultsProjectTags {...this.props.filterResultsProjectTagsProps}/>
        <RectangularButton onClick={this.props.onClick}>Apply Filter</RectangularButton>
      </Popup>
    );
  }
}
