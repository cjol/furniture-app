import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import * as React from "react";

export class AddBidDescription extends React.PureComponent<{}> {
  static defaultProps: AddBidDescription["props"] = {};

  render() {
    return (
      <Placeholder description="AddBidDescription" orientation="column">
        <Subheading />
        <PlainText />
        <Placeholder description="DescriptionField" />
      </Placeholder>
    );
  }
}
