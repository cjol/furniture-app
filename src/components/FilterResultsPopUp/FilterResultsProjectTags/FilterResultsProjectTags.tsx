import { Placeholder } from "Components/Placeholder";
import { ProjectTag } from "./ProjectTag/ProjectTag";
import * as React from "react";
import styled from "styled-components";

const FilterResultsProjectTagsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
export class FilterResultsProjectTags extends React.PureComponent<{}> {
  static defaultProps: FilterResultsProjectTags["props"] = {};

  render() {
    return (
      <FilterResultsProjectTagsStyled>
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
        <ProjectTag />
      </FilterResultsProjectTagsStyled>
    );
  }
}
