import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Star } from "@material-ui/icons";
import { StarBorder } from "@material-ui/icons";
import styled from "styled-components";
import { greenMain, grey } from "@style";

const RatingsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StarStyle = styled(Star)`
  color: ${greenMain};
`;
const StarBorderStyle = styled.div`
  border-color: ${grey};
`;
export class ProfileRatings extends React.PureComponent<{}> {
  static defaultProps: ProfileRatings["props"] = {};

  render() {
    return (
      <RatingsStyle>
        <StarStyle />
        <StarStyle />
        <StarStyle />
        <StarStyle />
        <StarBorderStyle />
      </RatingsStyle>
    );
  }
}
