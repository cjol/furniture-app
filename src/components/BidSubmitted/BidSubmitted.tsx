import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Popup } from "Components/Popup/Popup";
import { PlainText } from "Components/PlainText/PlainText";
export class BidSubmitted extends React.PureComponent<{}> {
  static defaultProps: BidSubmitted["props"] = {};

  render() {
    return (
      <Popup>
        <PlainText />
      </Popup>
    );
  }
}
