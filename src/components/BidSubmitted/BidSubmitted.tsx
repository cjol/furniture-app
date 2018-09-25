import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Popup } from "Components/Popup/Popup";
export class BidSubmitted extends React.PureComponent<{}> {
  static defaultProps: BidSubmitted["props"] = {};

  render() {
    return (
      <Popup>
        <Placeholder description="Response Message" />
      </Popup>
    );
  }
}
