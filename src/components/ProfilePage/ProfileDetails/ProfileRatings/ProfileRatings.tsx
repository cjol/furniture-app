import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
import { StarBorder } from "@material-ui/icons";
import styled from "styled-components";
import { greenMain, grey } from "@style";
import { AnyAaaaRecord } from "dns";

const RatingsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;
const StarStyle = styled(Star)``;
const StarBorderStyle = styled(StarBorder)``;

export class ProfileRatings extends React.PureComponent<{
  onClick: (rating: number) => void;
  rating: number;
}> {
  static defaultProps: ProfileRatings["props"] = {
    onClick: rating => alert("Profile Rating"),
    rating: 5
  };

  render() {
    if (this.props.rating < 1) {
      return (
        <RatingsStyle>
          <StarBorderStyle onClick={() => this.props.onClick(1)} />
          <StarBorderStyle onClick={() => this.props.onClick(2)} />
          <StarBorderStyle onClick={() => this.props.onClick(3)} />
          <StarBorderStyle onClick={() => this.props.onClick(4)} />
          <StarBorderStyle onClick={() => this.props.onClick(5)} />
        </RatingsStyle>
      );
    } else if (this.props.rating < 2) {
      return (
        <RatingsStyle>
          <StarStyle onClick={() => this.props.onClick(1)} />
          <StarBorderStyle onClick={() => this.props.onClick(2)} />
          <StarBorderStyle onClick={() => this.props.onClick(3)} />
          <StarBorderStyle onClick={() => this.props.onClick(4)} />
          <StarBorderStyle onClick={() => this.props.onClick(5)} />
        </RatingsStyle>
      );
    } else if (this.props.rating < 3) {
      return (
        <RatingsStyle>
          <StarStyle onClick={() => this.props.onClick(1)} />
          <StarStyle onClick={() => this.props.onClick(2)} />
          <StarBorderStyle onClick={() => this.props.onClick(3)} />
          <StarBorderStyle onClick={() => this.props.onClick(4)} />
          <StarBorderStyle onClick={() => this.props.onClick(5)} />
        </RatingsStyle>
      );
    } else if (this.props.rating < 4) {
      return (
        <RatingsStyle>
          <StarStyle onClick={() => this.props.onClick(1)} />
          <StarStyle onClick={() => this.props.onClick(2)} />
          <StarStyle onClick={() => this.props.onClick(3)} />
          <StarBorderStyle onClick={() => this.props.onClick(4)} />
          <StarBorderStyle onClick={() => this.props.onClick(5)} />
        </RatingsStyle>
      );
    } else if (this.props.rating < 5) {
      return (
        <RatingsStyle>
          <StarStyle onClick={() => this.props.onClick(1)} />
          <StarStyle onClick={() => this.props.onClick(2)} />
          <StarStyle onClick={() => this.props.onClick(3)} />
          <StarStyle onClick={() => this.props.onClick(4)} />
          <StarBorderStyle onClick={() => this.props.onClick(5)} />
        </RatingsStyle>
      );
    } else {
      return (
        <RatingsStyle>
          <StarStyle onClick={() => this.props.onClick(1)} />
          <StarStyle onClick={() => this.props.onClick(2)} />
          <StarStyle onClick={() => this.props.onClick(3)} />
          <StarStyle onClick={() => this.props.onClick(4)} />
          <StarStyle onClick={() => this.props.onClick(5)} />
        </RatingsStyle>
      );
    }
  }
}
