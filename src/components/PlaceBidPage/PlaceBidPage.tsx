import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage ["props"] = {};

  render() {
    return <Placeholder description="MenuBar" orientation="row">
            <Placeholder description="MenuButton"/>
            <Placeholder description="Title"/>
    </Placeholder>
    ;
  }
}
