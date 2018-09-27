import { Placeholder } from "Components/Placeholder";
import { ProjectTag } from "./ProjectTag/ProjectTag";
import * as React from "react";
import styled from "styled-components";
import { black } from "@style";

const FilterResultsProjectTagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ProjectTagSubHeadingStyle = styled.div`
  font-size: 18px;
  color: ${black};
`;
export class FilterResultsProjectTags extends React.PureComponent<{}> {
  static defaultProps: FilterResultsProjectTags["props"] = {};

  render() {
    return (
      <FilterResultsProjectTagsStyled>
        <ProjectTagSubHeadingStyle>ProjectTags</ProjectTagSubHeadingStyle>
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
