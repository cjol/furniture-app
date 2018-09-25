import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class ProfileEditSave extends React.PureComponent<{}> {
  static defaultProps: ProfileEditSave["props"] = {};

  render() {
    return (
      <Placeholder description="EditSaveComponent" orientation="row">
        <RectangularButton>Edit</RectangularButton>
        <RectangularButton>Save</RectangularButton>
      </Placeholder>
    );
  }
}
