import { Placeholder } from "Components/Placeholder";
import { ProjectTag } from "./ProjectTag/ProjectTag";
import * as React from "react";
import styled from "styled-components";
import { black } from "@style";

const FilterResultsProjectTagsStyled = styled.div``;
const ProjectTagSubHeadingStyle = styled.div`
  font-size: 18px;
  color: ${black};
`;
const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export class FilterResultsProjectTags extends React.PureComponent<{
  projectTagProps: ProjectTag["props"][];
}> {
  static defaultProps: FilterResultsProjectTags["props"] = {
    projectTagProps: [
      ProjectTag.defaultProps,
      ProjectTag.defaultProps,
      ProjectTag.defaultProps,
      ProjectTag.defaultProps,
      ProjectTag.defaultProps,
      ProjectTag.defaultProps
    ]
  };

  render() {
    return (
      <FilterResultsProjectTagsStyled>
        <ProjectTagSubHeadingStyle>ProjectTags</ProjectTagSubHeadingStyle>
        <TagsContainer>
          <ProjectTag />
          <ProjectTag />
          <ProjectTag />
          <ProjectTag />
          <ProjectTag />
          <ProjectTag />
        </TagsContainer>
      </FilterResultsProjectTagsStyled>
    );
  }
}
