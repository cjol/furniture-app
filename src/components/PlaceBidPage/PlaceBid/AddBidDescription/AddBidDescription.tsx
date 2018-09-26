import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class AddBidDescription extends React.PureComponent<{}> {
  static defaultProps: AddBidDescription["props"] = {};

  render() {
    return (
      <Placeholder description="AddBidDescription" orientation="column">
        <Placeholder description="Description" />
        <Placeholder description="DescriptionField" />
        <RectangularButton />
      </Placeholder>
    );
  }
}
