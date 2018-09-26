import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";

const ActiveBidsHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const ArrowsStyle = styled.div``;

export class ActiveBidsHeader extends React.PureComponent<{
  arrowDropDown: () => void;
  arrowDropUp: () => void;
}> {
  static defaultProps: ActiveBidsHeader["props"] = {
    arrowDropDown: () => alert("Moving to Lower Bids "),
    arrowDropUp: () => alert("Moving to the Upper Bids ")
  };

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
