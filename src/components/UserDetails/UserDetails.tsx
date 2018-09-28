import { ProfileRatings } from "Components/ProfilePage/ProfileDetails/ProfileRatings/ProfileRatings";
import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";

const UserDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserNameStyled = styled.div`
  display: flex;
  border-radius: 30px;
  font-size: 14px;
  font: ${mainFont};
  margin-top:8px;
  margin-Bottom;8px;
`;
const UserPictureStyled = styled.div <{image: string}>`
  display: flex;
  height: 50px;
  width: 50px;
  background-image: url(${props=>{
    return props.image;
  }});
  background-position: center;
  background-size: cover;
  border-radius: 50px;
`;

const RatingStarsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
export class UserDetails extends React.PureComponent<{
  image: string;
  userName: string;
  profileRatingsProps: ProfileRatings["props"];
}> {
  static defaultProps: UserDetails["props"] = {
    image: "https://tyrohq.com/apple-touch-icon.png",
    userName: "John Doe",
    profileRatingsProps: ProfileRatings.defaultProps
  };

  render() {
    return (
      <UserDetailsStyled>
        <UserPictureStyled image={this.props.image} />
        <UserNameStyled>{this.props.userName}</UserNameStyled>
        <ProfileRatings {...this.props.profileRatingsProps}/>
      </UserDetailsStyled>
    );
  }
}
