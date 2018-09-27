import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Search } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";
import { Checkbox } from "@material-ui/core";
const SearchHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  flex-grow: 1;
  align-items: center;
  flex-grow: 1;
`;
const SearchCheckBoxStyle = styled(Search)`
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export class SearchContainer extends React.PureComponent<{}> {
  static defaultProps: SearchContainer["props"] = {};

  render() {
    return (
      <SearchHeaderStyle>
        <Subheading>Browse Projects</Subheading>
        {/* <SearchCheckBoxStyle /> */}
      </SearchHeaderStyle>
    );
  }
}
