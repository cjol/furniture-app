import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Search } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";
import { Checkbox } from "@material-ui/core";
const SearchHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  flex-grow: 1;
  align-items: center;
`;
const SearchCheckBoxStyle = styled(Search)`
  color: grey;
`;
export class SearchContainer extends React.PureComponent<{}> {
  static defaultProps: SearchContainer["props"] = {};

  render() {
    return (
      <SearchHeaderStyle>
        <Subheading>Search Projects</Subheading>
        <SearchCheckBoxStyle />
      </SearchHeaderStyle>
    );
  }
}
