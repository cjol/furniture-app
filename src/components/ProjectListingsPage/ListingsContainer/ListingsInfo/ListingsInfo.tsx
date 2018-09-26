import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { ArrowDropDown } from "@material-ui/icons";
import { ArrowDropUp } from "@material-ui/icons";
import styled from "styled-components";

const ListingsInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListingsTitleStyle = styled.div``;
const AvgBidStyle = styled.div``;

export class ListingsInfo extends React.PureComponent<{}> {
  static defaultProps: ListingsInfo["props"] = {};

  render() {
    return (
      <ListingsInfoStyle>
        <ListingsTitleStyle>Listings</ListingsTitleStyle>
        <ArrowDropUp />
        <ArrowDropDown />
        <AvgBidStyle>Avg. Bid</AvgBidStyle>
      </ListingsInfoStyle>
    );
  }
}
