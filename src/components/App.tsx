import * as React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";
import { Placeholder } from "Components/Placeholder";
import { mainFont } from "@style";

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
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppStyle>
          <Placeholder description="App Goes Here!" />
        </AppStyle>
      </ApolloProvider>
    );
  }
}
