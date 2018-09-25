import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Header } from "./Header/Header";

export class Popup extends React.PureComponent<{}> {
  static defaultProps: Popup["props"] = {};

  render() {
    return (
      <Placeholder description="Popup">
        <Header />
        <Placeholder description="Popup Contents" orientation="column">
          {this.props.children}
        </Placeholder>
      </Placeholder>
    );
  }
}
