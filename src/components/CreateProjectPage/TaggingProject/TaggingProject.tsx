import { FilterResultsProjectTags } from "Components/FilterResultsPopUp/FilterResultsProjectTags/FilterResultsProjectTags";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const TaggingProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export class TaggingProject extends React.PureComponent<{
  filterResultsProps: FilterResultsProjectTags["props"];
}> {
  static defaultProps: TaggingProject["props"] = {
    filterResultsProps: FilterResultsProjectTags.defaultProps
  };

  render() {
    return (
      <TaggingProjectStyle>
        <Subheading>Tag Your Project</Subheading>
        <PlainText>
          To ensure your project is found, add tags such as “bed” or “table”
          below.
        </PlainText>
        <FilterResultsProjectTags {...this.props.filterResultsProps} />
      </TaggingProjectStyle>
    );
  }
}
