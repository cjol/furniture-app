import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";

export class PhotoContainer extends React.PureComponent<{}> {
  static defaultProps: PhotoContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Photos container" orientation="row">
        <Placeholder orientation="column">
          <Subheading />
          <PlainText />
        </Placeholder>
        <RoundButton />
      </Placeholder>
    );
  }
}
