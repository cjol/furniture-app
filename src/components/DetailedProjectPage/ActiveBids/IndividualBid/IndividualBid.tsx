import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { ActiveBidImage } from "./ActiveBidImage/ActiveBidImage";
import { BidDetails } from "./BidDetails/BidDetails";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IndividualBidStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  flex-grow: 1;
`;
const SmallButton = styled(RectangularButton)`
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0px;
`;
export class IndividualBid extends React.PureComponent<{
  activeBidprops: ActiveBidImage["props"];
  bidProps: BidDetails["props"];
  rectangularButton: (id: string) => void;
  id: string;
  projectID: string;
}> {
  static defaultProps: IndividualBid["props"] = {
    activeBidprops: ActiveBidImage.defaultProps,
    bidProps: BidDetails.defaultProps,
    rectangularButton: id => alert("Select"),
    id: "100",
    projectID: "10"
  };

  render() {
    return (
      <IndividualBidStyle>
        <ActiveBidImage {...this.props.activeBidprops} />
        <BidDetails {...this.props.bidProps} />
        <Link to={"/project/" + this.props.projectID + "/matched"}>
        <SmallButton
          onClick={() => this.props.rectangularButton(this.props.id)}
        >
          SELECT
        </SmallButton>
        </Link>
      </IndividualBidStyle>
    );
  }
}
