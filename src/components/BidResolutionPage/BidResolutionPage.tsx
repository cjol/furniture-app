import { AppHeader } from "Components/AppHeader/AppHeader";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import * as React from "react";

import { CostDue } from "./CostDue/CostDue";
import { UserContactInfo } from "./UserContactInfo/UserContactInfo";
import { UserDetails } from "Components/UserDetails/UserDetails";
import { PlainText } from "Components/PlainText/PlainText";
import styled from "styled-components";
import { greenMain } from "@style";
const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const MatchFoundStyled = styled.div`
  display: flex;
  color: ${greenMain};
  font-size: 24px;
  text-align: center;
`;
const RateUserHereStyled = styled.div`
  display: flex;
  color: ${greenMain};
  font-size: 24px;
  text-align: center;
`;
export class BidResolutionPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  projectHeaderProps: ProjectHeader["props"];
  costDueProps: CostDue["props"];
  imageBarProps: ImageBar["props"];
  userContactInfoProps: UserContactInfo["props"];
  userDetailProps: UserDetails["props"];
}> {
  static defaultProps: BidResolutionPage["props"] = {
  appHeaderProps: AppHeader.defaultProps,
  projectHeaderProps: ProjectHeader.defaultProps,
  costDueProps: CostDue.defaultProps,
  imageBarProps: ImageBar.defaultProps,
  userContactInfoProps: UserContactInfo.defaultProps,
  userDetailProps: UserDetails.defaultProps
  };

  render() {
    return (
      <HeaderStyled>
        <AppHeader />
        <MatchFoundStyled> You've Found your match!</MatchFoundStyled>
        <PlainText>Instructions go here</PlainText>
        <ProjectHeader />
        <CostDue />
        <ImageBar />
        <UserContactInfo />
        <RateUserHereStyled>Rate User</RateUserHereStyled>
        <UserDetails />
      </HeaderStyled>
    );
  }
}
