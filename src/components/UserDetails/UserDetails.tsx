import { ProfileRatings } from "Components/ProfilePage/ProfileDetails/ProfileRatings/ProfileRatings";
import * as React from "react";
import styled from "styled-components";

const UserDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserNameStyled = styled.div`
  display: flex;
  border-radius: 30px;
`;
const UserPictureStyled = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
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
        <UserNameStyled>John Doe</UserNameStyled>
        <ProfileRatings />
      </UserDetailsStyled>
    );
  }
}
