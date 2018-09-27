import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";
import { greenMain } from "@style";
import { grey } from "@style";

const ActiveBidsHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex-grow: 1;
  font-family: ${mainFont};
  color: ${greenMain};
  font-size: 18px;
`;

const ArrowDropDownStyle = styled(ArrowDropDown)`
  color: ${grey};
`;

const ArrowDropUpStyle = styled(ArrowDropUp)`
  color: ${grey};
`;

const ArrowsStyle = styled.div``;

const SubheadingStyled = styled(Subheading)`
  flex-grow: 1;
`;

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
        <SubheadingStyled>Active Bid</SubheadingStyled>
        <ArrowsStyle>
          <ArrowDropDownStyle />
          <ArrowDropUpStyle />
        </ArrowsStyle>
      </ActiveBidsHeaderStyle>
    );
  }
}
