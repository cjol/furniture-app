import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const TagsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
  font-size: 13px;
`;
const TagsLabelStyle = styled.div``;
const TagStyle = styled.div``;

export class TagsContainer extends React.PureComponent<{}> {
  static defaultProps: TagsContainer["props"] = {};

  render() {
    return (
      <TagsContainerStyle>
        <TagsLabelStyle>Tags:</TagsLabelStyle>
        <TagStyle>Bed</TagStyle>
        <TagStyle>Bedside Table</TagStyle>
      </TagsContainerStyle>
    );
  }
}
