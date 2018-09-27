import { Placeholder } from "Components/Placeholder";
import { ProjectTag } from "./ProjectTag/ProjectTag";
import * as React from "react";
import styled from "styled-components";
import { black } from "@style";

const FilterResultsProjectTagsStyled = styled.div`
  margin-top: 24px;
`;
const ProjectTagSubHeadingStyle = styled.div`
  font-size: 18px;
  color: ${black};
`;
const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
    const projectTags = this.props.projectTagProps.map(projectTagProp => {
      return <ProjectTag {...projectTagProp} />;
    });

    return (
      <FilterResultsProjectTagsStyled>
        <ProjectTagSubHeadingStyle>ProjectTags</ProjectTagSubHeadingStyle>
        <TagsContainer>{projectTags}</TagsContainer>
      </FilterResultsProjectTagsStyled>
    );
  }
}
