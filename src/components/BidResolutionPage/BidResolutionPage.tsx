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
import { FetchBidResolutionQuery } from "./FetchBidResolutionPage.gql";
import { FetchBidResolutionQuery as FetchBidResolutionType } from "@data";
import { FetchBidResolutionQueryVariables } from "@data";
import { Query } from "react-apollo";
import { Loading, DataError } from "Components/Placeholder";

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
      <Query<FetchBidResolutionType, FetchBidResolutionQueryVariables>
        query={FetchBidResolutionQuery}
        variables={FetchBidResolutionQuery}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <DataError />;
          // if(data)

          return (
            <PageStyled>
              <AppHeader {...this.props.appHeaderProps} />
              <PageContents>
                <MatchFoundStyled> You've Found Your Match!</MatchFoundStyled>
                <TextContainer>
                  <PlainText>
                    Congratulations you’ve found your carpenter! Please contact
                    them to start the project and sort out payment and delivery!
                    Don’t forget to check back in to review the work. Contact us
                    if there are any problems.
                  </PlainText>
                </TextContainer>

                <ProjectHeader title={
                  {title: data.getProject.title,
                  isEditable:false,
                  setTitle:()=>{}}} />
                <CostDue price={data.getProject.chosenBid.price + "UGX"}
                dueDate={data.getProject.chosenBid.time}
                />
                <ImageBar image={} />
                <DescriptionContainer>
                  <PlainText>
                    { }
                  </PlainText>
                </DescriptionContainer>
                <UserContactInfo addressProps={{address: data. }} emailProps={{email: }}  />
                <RateUserHereStyled>Rate User</RateUserHereStyled>
                <UserDetailsEditable>
                  <UserDetails {...this.props.userDetailProps} />
                </UserDetailsEditable>
              </PageContents>
            </PageStyled>
          );
        }}
      </Query>
    );
  }
}
