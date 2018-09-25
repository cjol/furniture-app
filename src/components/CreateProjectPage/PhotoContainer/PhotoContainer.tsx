import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";

export class PhotoContainer extends React.PureComponent<{}> {
  static defaultProps: PhotoContainer["props"] = {};

  render() {
    return (
      <Placeholder description="Photos container" orientation="row">
        <Placeholder description="Upload Photos" orientation="column">
          <Placeholder description="Photos Message" />
        </Placeholder>
        <RoundButton />
      </Placeholder>
    );
  }
}
