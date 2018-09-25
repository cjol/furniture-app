import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { TagsRow1 } from "./TagsRow1/TagsRow1";
import { TagsRow2 } from "./TagsRow2/TagsRow2";

export class FilterResultsProjectTags extends React.PureComponent<{}> {
  static defaultProps: FilterResultsProjectTags["props"] = {};

  render() {
    return (
      <Placeholder description="FilterResultsProjectTags" orientation="column">
        <TagsRow1 />
        <TagsRow2 />
      </Placeholder>
    );
  }
}
