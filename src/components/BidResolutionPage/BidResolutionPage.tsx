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
const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const MatchFoundStyled = styled.div`
  display: flex;
`;
const RateUserHereStyled = styled.div`
  display: flex;
`;
export class BidResolutionPage extends React.PureComponent<{}> {
  static defaultProps: BidResolutionPage["props"] = {};

  render() {
    return (
      <HeaderStyled>
        <AppHeader />
        <MatchFoundStyled> You've Found your match!</MatchFoundStyled>
        <PlainText />
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
