import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { IndividualProject } from "./IndividualProject/IndividualProject";
import { ListingsInfo } from "./ListingsInfo/ListingsInfo";

export class ListingsContainer extends React.PureComponent<{}> {
  static defaultProps: ListingsContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Listings Container" orientation="column">
        <ListingsInfo />

        <IndividualProject />

        <IndividualProject />

        <IndividualProject />
      </Placeholder>
    );
  }
}
