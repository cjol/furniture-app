import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Search } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";
const SearchHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export class SearchContainer extends React.PureComponent<{}> {
  static defaultProps: SearchContainer["props"] = {};

  render() {
    return (
      <SearchHeaderStyle>
        <Subheading />
        <Search />
      </SearchHeaderStyle>
    );
  }
}
