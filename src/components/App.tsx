import "@assets/scss/App.scss";

import { mainFont } from "@style";
import ApolloClient from "apollo-boost";
import { BidResolutionPage } from "Components/BidResolutionPage/BidResolutionPage";
import { CreateProjectPage } from "Components/CreateProjectPage/CreateProjectPage";
import { DetailedProjectPage } from "Components/DetailedProjectPage/DetailedProjectPage";
import { PlaceBidPage } from "Components/PlaceBidPage/PlaceBidPage";
import { ProfilePage } from "Components/ProfilePage/ProfilePage";
import { ProjectListingsPage } from "Components/ProjectListingsPage/ProjectListingsPage";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import styled from "styled-components";
import { Menu } from "Components/Menu/Menu";
import { Toggle } from "react-powerplug";

const client = new ApolloClient({
  uri:
    "https://gpkifjlowbcbbmqzr66hwl77t4.appsync-api.eu-west-1.amazonaws.com/graphql",
  headers: {
    "x-api-key": "da2-dmpi5qyx65fopozln7amctmvr4"
  }
});

const AppContainerStyle = styled.div`
  font-family: ${mainFont};
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 500px;
  overflow: hidden;
  align-items: stretch;
`;

const AppContentsStyle = styled.div`
  font-family: ${mainFont};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  max-width: 500px;
  align-items: stretch;
`;

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainerStyle>
          <Router>
            <Toggle initial={false}>
              {({ on, toggle }) => {
                return (
                  <React.Fragment>
                    {on ? <Menu toggle={toggle} /> : null}
                    <AppContentsStyle>
                      <Switch>
                        <Route
                          exact
                          path="/"
                          render={() => (
                            <ProjectListingsPage
                              appHeaderProps={{
                                title: "Project Listings",
                                menu: toggle
                              }}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/project/new"
                          render={() => (
                            <CreateProjectPage
                              appHeaderProps={{
                                title: "Create New Project",
                                menu: toggle
                              }}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/project/:id"
                          render={() => (
                            <DetailedProjectPage
                              appHeaderProps={{
                                title: "Detailed Project View",
                                menu: toggle
                              }}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/project/:id/bid"
                          render={() => (
                            <PlaceBidPage
                              appHeaderProps={{
                                title: "Place Bid",
                                menu: toggle
                              }}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/project/:id/matched"
                          render={() => (
                            <BidResolutionPage
                              appHeaderProps={{
                                title: "Bid Resolution",
                                menu: toggle
                              }}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/profile"
                          render={() => (
                            <ProfilePage
                              appHeaderProps={{
                                title: "Bid Resolution",
                                menu: toggle
                              }}
                            />
                          )}
                        />
                        <Route>
                          <Redirect to="/" />
                        </Route>
                      </Switch>
                    </AppContentsStyle>
                  </React.Fragment>
                );
              }}
            </Toggle>
          </Router>
        </AppContainerStyle>
      </ApolloProvider>
    );
  }
}
