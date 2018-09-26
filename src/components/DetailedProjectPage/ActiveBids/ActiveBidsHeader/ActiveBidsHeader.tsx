import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const ActiveBidsHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const ArrowsStyle = styled.div``;

export class ActiveBidsHeader extends React.PureComponent<{}> {
  static defaultProps: ActiveBidsHeader["props"] = {};

  render() {
    return (
      <ActiveBidsHeaderStyle>
        <Subheading />
        <ArrowsStyle>
          <ArrowDropDown />
          <ArrowDropUp />
        </ArrowsStyle>
      </ActiveBidsHeaderStyle>
    );
  }
}
