import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { map } from "async";

const TagsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
  font-size: 13px;
  margin-top: 4px;
`;
const TagsLabelStyle = styled.div`
  margin-right: 4px;
`;
const TagStyle = styled.div`
  margin-right: 2px;
`;

export class TagsContainer extends React.PureComponent<{
  tags: string[];
}> {
  static defaultProps: TagsContainer["props"] = {
    tags: ["Bed", "Chair", "Table", "Desk", "BedSide Table", "Sofa"]
  };

  render() {
    const tags = this.props.tags.map(tag => {
      return <TagStyle>{tag}, </TagStyle>;
    });

    return (
      <TagsContainerStyle>
        <TagsLabelStyle>Tags:</TagsLabelStyle>
        {tags}
      </TagsContainerStyle>
    );
  }
}
