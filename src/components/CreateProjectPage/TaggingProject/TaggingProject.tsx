import { FilterResultsProjectTags } from "Components/FilterResultsPopUp/FilterResultsProjectTags/FilterResultsProjectTags";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const TaggingProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class TaggingProject extends React.PureComponent<{}> {
  static defaultProps: TaggingProject["props"] = {};

  render() {
    return (
      <TaggingProjectStyle>
        <Subheading />
        <PlainText />
        <FilterResultsProjectTags />
      </TaggingProjectStyle>
    );
  }
}
