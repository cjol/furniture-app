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
import { greenMain, white } from "@style";

const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const MatchFoundStyled = styled.div`
  display: flex;
  color: ${greenMain};
  font-size: 24px;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const RateUserHereStyled = styled.div`
  display: flex;
  color: ${greenMain};
  font-size: 24px;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${white};
  flex-grow: 1;
`;

const UserDetailsEditable = styled.div`
  color: ${greenMain};
`;

const DescriptionContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
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
      <PageStyled>
        <AppHeader {...this.props.appHeaderProps} />
        <PageContents>
          <MatchFoundStyled> You've Found Your Match!</MatchFoundStyled>
          <TextContainer>
            <PlainText>
              Congratulations you’ve found your carpenter! Please contact them
              to start the project and sort out payment and delivery! Don’t
              forget to check back in to review the work. Contact us if there
              are any problems.
            </PlainText>
          </TextContainer>

          <ProjectHeader {...this.props.projectHeaderProps} />
          <CostDue {...this.props.costDueProps} />
          <ImageBar {...this.props.imageBarProps} />
          <DescriptionContainer>
            <PlainText>
              {" "}
              Description of the project. Including item, type of wood,
              dimensions, expected time frame of delivery. Secondary line text
              lorem ipsum dapibus, neque id cursus faucibus.{" "}
            </PlainText>
          </DescriptionContainer>
          <UserContactInfo {...this.props.userContactInfoProps} />
          <RateUserHereStyled>Rate User</RateUserHereStyled>
          <UserDetailsEditable>
            <UserDetails {...this.props.userDetailProps} />
          </UserDetailsEditable>
        </PageContents>
      </PageStyled>
    );
  }
}
