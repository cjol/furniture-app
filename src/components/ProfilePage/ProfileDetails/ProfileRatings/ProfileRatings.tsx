import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
import { StarBorder } from "@material-ui/icons";
import styled from "styled-components";

const RatingsStyle=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;


export class ProfileRatings extends React.PureComponent<{}> {
  static defaultProps: ProfileRatings["props"] = {};

  render() {
    return (
      <RatingsStyle>
        <Star />
        <Star />
        <Star />
        <Star />
        <StarBorder />
      </RatingsStyle>
    );
  }
}
