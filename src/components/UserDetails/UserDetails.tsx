import { Placeholder } from "Components/Placeholder";
import { Star, StarBorder } from "@material-ui/icons";
import styled from "styled-components";
import { ProfileRatings } from "Components/ProfilePage/ProfileDetails/ProfileRatings/ProfileRatings";
import * as React from "react";

const UserDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserPicturestyled = styled.div`
  display: flex;
  border-radius: 30px;
`;
const RatingStarsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
export class UserDetails extends React.PureComponent<{}> {
  static defaultProps: UserDetails["props"] = {};

  render() {
    return (
      <Placeholder description="User Details" orientation="column">
        <Placeholder description="User Picture" />
        <Placeholder description="User Name" />
        <ProfileRatings />
      </Placeholder>
    );
  }
}
