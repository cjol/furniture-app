import { PlaceBid as PlaceBidType, PlaceBidVariables } from "@data";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { Mutation } from "react-apollo";
import { BidSubmitted } from "Components/BidSubmitted/BidSubmitted";

import { withRouter } from "react-router-dom";
import { PlaceBid } from "./PlaceBid.gql";
import { Toggle } from "react-powerplug";

export class PlaceBidButtonInner extends React.PureComponent<{
  projectID: string;
  description: string;
  time: string;
  price: number;
  history: any;
}> {
  render() {
    return (
      <Mutation<PlaceBidType, PlaceBidVariables>
        mutation={PlaceBid}
        variables={{
          bid: {
            description: this.props.description,
            project: this.props.projectID,
            price: this.props.price,
            time: this.props.time,
            user: "cc0ce972-7a8d-4ea4-bb87-34186d32b2b4"
          }
        }}
      >
        {(placeBid, { data, error, loading, called }) => {
          if (loading) {
            return (
              <RectangularButton onClick={() => {}}>
                BIDDING...
              </RectangularButton>
            );
          }
          if (error) {
            return (
              <RectangularButton onClick={() => {}}>Error!</RectangularButton>
            );
          }

          if (called) {
            return (
              <Toggle initial={true}>
                {({ on: show, toggle }) => (
                  <BidSubmitted
                    title="My Project"
                    popup={{
                      show,
                      headerProps: {
                        closeFunction: () => {
                          toggle();
                          this.props.history.push(
                            "/project/" + this.props.projectID
                          );
                        },
                        title: "Bid Submitted"
                      }
                    }}
                  />
                )}
              </Toggle>
            );
          }

          return (
            <RectangularButton onClick={placeBid}>PLACE BID</RectangularButton>
          );
        }}
      </Mutation>
    );
  }
}
export const PlaceBidButton = withRouter(PlaceBidButtonInner);
