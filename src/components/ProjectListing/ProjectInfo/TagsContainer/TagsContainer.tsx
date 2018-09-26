import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const TagsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
`;
const TagsStyle = styled.div``;
const Tag1Style = styled.div``;
const Tag2Style = styled.div``;

export class TagsContainer extends React.PureComponent<{}> {
  static defaultProps: TagsContainer["props"] = {};

  render() {
    return (
      <TagsContainerStyle>
        <TagsStyle>Tags:</TagsStyle>
        <Tag1Style>Bed</Tag1Style>
        <Tag2Style>Bedside Table</Tag2Style>
      </TagsContainerStyle>
    );
  }
}
