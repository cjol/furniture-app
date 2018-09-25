import * as React from "react";

import { Placeholder } from "Components/Placeholder";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";
import { mainFont } from "@style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import { ProjectListings } from "Components/ProjectListings/ProjectListings";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { SubmitQuestionPopUp } from "Components/SubmitQuestionPopUp/SubmitQuestionPopUp";

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
  justify-content: flex-start;
  align-items: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppStyle>
          <Router>
            <div>
              <Link to="/">Go back home</Link>
              <Switch>
                <Route path="/AppHeader" component={AppHeader} />
                <Route
                  path="/CreateProjectPage"
                  component={CreateProjectPage}
                />
                <Route path="/BidSubmitted" component={BidSubmitted} />
                <Route
                  path="/BidResolutionPage"
                  component={BidResolutionPage}
                />
                <Route path="/BidDetail" component={BidDetail} />
                <Route path="/AppHeader" component={AppHeader} />
                <Route
                  path="/DetailedProjectPage"
                  component={DetailedProjectPage}
                />
                <Route path="/PhotoUploadPopUp" component={PhotoUploadPopUp} />
                <Route path="/PlaceBidPage" component={PlaceBidPage} />
                <Route path="/ProfilePage" component={ProfilePage} />
                <Route path="/ProjectHeader" component={ProjectHeader} />
                <Route path="/ProjectListings" component={ProjectListings} />
                <Route
                  path="/RectangularButton"
                  component={RectangularButton}
                />
                <Route path="/RoundButton" component={RoundButton} />
                <Route
                  path="/SubmitQuestionPopUp"
                  component={SubmitQuestionPopUp}
                />

                <Route>
                  <div>
                    Click one of the links below to view an individual
                    component:
                    <ul>
                      <li>
                        <Link to="/CreateProjectPage">CreateProjectPage</Link>
                      </li>
                      <li>
                        <Link to="/BidSubmitted">BidSubmitted</Link>
                      </li>
                      <li>
                        <Link to="/BidResolutionPage">BidResolutionPage</Link>
                      </li>
                      <li>
                        <Link to="/BidDetail">BidDetail</Link>
                      </li>
                      <li>
                        <Link to="/AppHeader">AppHeader</Link>
                      </li>
                      <li>
                        <Link to="/DetailedProjectPage">
                          DetailedProjectPage
                        </Link>
                      </li>
                      <li>
                        <Link to="/PhotoUploadPopUp">PhotoUploadPopUp</Link>
                      </li>
                      <li>
                        <Link to="/PlaceBidPage">PlaceBidPage</Link>
                      </li>
                      <li>
                        <Link to="/ProfilePage">ProfilePage</Link>
                      </li>
                      <li>
                        <Link to="/ProjectHeader">ProjectHeader</Link>
                      </li>
                      <li>
                        <Link to="/ProjectListings">ProjectListings</Link>
                      </li>
                      <li>
                        <Link to="/RectangularButton">RectangularButton</Link>
                      </li>
                      <li>
                        <Link to="/RoundButton">RoundButton</Link>
                      </li>
                      <li>
                        <Link to="/SubmitQuestionPopUp">
                          SubmitQuestionPopUp
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Route>
              </Switch>
            </div>
          </Router>
        </AppStyle>
      </ApolloProvider>
    );
  }
}
