import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import styled from "styled-components";
import { mainFont, greenMain, grey } from "@style";

const ListingsInfoStyle = styled.div`
  display: flex;
  font-family: ${mainFont};
  flex-direction: column;
  justify-content: stretch;
`;

const ListingsTitleStyle = styled.div`
  font-size: 18px;
  color: ${greenMain};
  justify-content: flex-start;
`;
const AvgBidStyle = styled.div`
  font-size: 13px;
  color: ${grey};
  justify-content: flex-end;
`;
const ArrowDropDownStyle = styled(ArrowDropDown)`
  color: ${grey};
`;
const ArrowDropUpStyle = styled(ArrowDropUp)`
  color: ${grey};
`;

export class ListingsInfo extends React.PureComponent<{}> {
  static defaultProps: ListingsInfo["props"] = {};

  render() {
    return (
      <ListingsInfoStyle>
        <ListingsTitleStyle>Listings</ListingsTitleStyle>
        <ArrowDropUpStyle />
        <ArrowDropDownStyle />
        <AvgBidStyle>Avg. Bid</AvgBidStyle>
      </ListingsInfoStyle>
    );
  }
}
