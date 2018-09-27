import * as React from "react";

import { Placeholder } from "Components/Placeholder";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";
import { mainFont } from "@style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ComponentPreviewer } from "./ComponentPreviewer";

import { AppHeader } from "Components/AppHeader/AppHeader";
import { BidDetail } from "Components/BidDetail/BidDetail";
import { BidResolutionPage } from "Components/BidResolutionPage/BidResolutionPage";
import { BidSubmitted } from "Components/BidSubmitted/BidSubmitted";
import { CreateProjectPage } from "Components/CreateProjectPage/CreateProjectPage";
import { DetailedProjectPage } from "Components/DetailedProjectPage/DetailedProjectPage";
import { PhotoUploadPopUp } from "Components/PhotoUploadPopUp/PhotoUploadPopUp";
import { PlaceBidPage } from "Components/PlaceBidPage/PlaceBidPage";
import { ProfilePage } from "Components/ProfilePage/ProfilePage";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { ProjectListingsPage } from "Components/ProjectListingsPage/ProjectListingsPage";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { SubmitQuestionPopUp } from "Components/SubmitQuestionPopUp/SubmitQuestionPopUp";
import { FilterResultsPopUp } from "Components/FilterResultsPopUp/FilterResultsPopUp";

import "@assets/scss/App.scss";

const client = new ApolloClient({
  uri:
    "https://c75qikhalrhnnf3awz3npbdspy.appsync-api.eu-west-1.amazonaws.com/graphql",
  headers: {
    "x-api-key": "da2-dmpi5qyx65fopozln7amctmvr4"
  }
});

const AppStyle = styled.div`
  font-family: ${mainFont};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppStyle>
          <Router>
            <Route
              render={() => (
                <ComponentPreviewer
                  components={{
                    AppHeader,
                    BidDetail,
                    BidResolutionPage,
                    BidSubmitted,
                    CreateProjectPage,
                    DetailedProjectPage,
                    PhotoUploadPopUp,
                    PlaceBidPage,
                    ProfilePage,
                    ProjectHeader,
                    ProjectListingsPage,
                    RectangularButton,
                    RoundButton,
                    SubmitQuestionPopUp,
                    FilterResultsPopUp
                  }}
                />
              )}
            />
          </Router>
        </AppStyle>
      </ApolloProvider>
    );
  }
}
