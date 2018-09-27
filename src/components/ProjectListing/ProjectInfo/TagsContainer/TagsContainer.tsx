import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const TagsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
  font-size: 13px;
  margin-top:4px;
`;
const TagsLabelStyle = styled.div`
  margin-right: 4px;
`;
const TagStyle = styled.div`
  margin-right: 2px;
`;

export class TagsContainer extends React.PureComponent<{}> {
  static defaultProps: TagsContainer["props"] = {};

  render() {
    return (
      <TagsContainerStyle>
        <TagsLabelStyle>Tags:</TagsLabelStyle>
        <TagStyle>Bed, </TagStyle>
        <TagStyle>Bedside Table </TagStyle>
      </TagsContainerStyle>
    );
  }
}
