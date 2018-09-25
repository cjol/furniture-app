import { Placeholder } from "Components/Placeholder";
import { Star, StarBorder } from "@material-ui/icons";
import styled from "styled-components";
import { ProfileRatings } from "Components/ProfilePage/ProfileDetails/ProfileRatings/ProfileRatings";
import * as React from "react";

const UserDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserNameStyled = styled.div`
  display: flex;
  border-radius: 30px;
`;
const UserPictureStyled = styled.div`
display:flex;
`;

const RatingStarsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
export class UserDetails extends React.PureComponent<{}> {
  static defaultProps: UserDetails["props"] = {};

  render() {
    return (
      <UserDetailsStyled>
        <UserPictureStyled />
        <UserNameStyled />
        <RatingStarsStyled>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
        </RatingStarsStyled>
      </UserDetailsStyled>
    );
  }
}
