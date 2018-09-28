import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ProfileEditSave } from "./ProfileEditSave/ProfileEditSave";
import { ActiveProjectBids } from "./ActiveProjectBids/ActiveProjectBids";
import { SuppliersSelected } from "./SuppliersSelected/SuppliersSelected";
import { ProfileDetails } from "./ProfileDetails/ProfileDetails";
import styled from "styled-components";
import { white } from "@style";
import { ProfilePageState } from "./ProfilePageState";
import { FetchProfilePage } from "./FetchProfilePage.gql";
import { FetchProfilePage as FetchProfilePageTypes } from "@data";
import { FetchProfilePageVariables } from "@data";
import { Query } from "react-apollo";
import { Loading, DataError } from "Components/Placeholder";

const ProfilePageHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
`;

const PageContents = styled.div`
  padding: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${white};
`;
export class ProfilePage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  profileEditSaveProps: ProfileEditSave["props"];
  activeProjectBidsProps: ActiveProjectBids["props"];
  suppliersSelectedProps: SuppliersSelected["props"];
}> {
  static defaultProps: ProfilePage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    profileEditSaveProps: ProfileEditSave.defaultProps,
    activeProjectBidsProps: ActiveProjectBids.defaultProps,
    suppliersSelectedProps: SuppliersSelected.defaultProps
  };

  render() {
    return (
      <Query<FetchProfilePageTypes, FetchProfilePageVariables>
        query={FetchProfilePage}
        variables={{ userID: "cc0ce972-7a8d-4ea4-bb87-34186d32b2b4" }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <DataError />;

          return (
            <ProfilePageState>
              {({
                fullName,
                setFullName,

                pictureURL,
                setPictureURL,

                email,
                setEmail,

                location,
                setLocation,

                phoneNumber,
                setPhoneNumber
              }) => {
                const listings = data.getUser.projects.items.map(item => {
                  return {
                    id: item.id,
                    projectImage: item.photos[0],
                    amountTitle: item.averageBidAmount,
                    projectInfo: {
                      title: item.title ,
                      tagsContainerProps: {
                        tags: item.tags
                      }
                    },

                    chosenBid: 

                  }
                })
                return (
                  <ProfilePageHeaderStyle>
                    <AppHeader {...this.props.appHeaderProps} />
                    <PageContents>
                      <ProfileDetails
                        profileImageprops={{ image: pictureURL }}
                        userCredentialsprops={{
                          isEditMode: true,
                          fullName,
                          setFullName,
                          pictureURL,
                          setPictureURL,
                          email,
                          setEmail,
                          phoneNumber,
                          setPhoneNumber,
                          location,
                          setLocation
                        }}
                      />
                      <ProfileEditSave  />
                      <ActiveProjectBids
                        projectListingProps={listings}
                      />
                      <SuppliersSelected
                        {...this.props.suppliersSelectedProps}
                      />
                    </PageContents>
                  </ProfilePageHeaderStyle>
                );
              }}
            </ProfilePageState>
          );
        }}
      </Query>
    );
  }
}
