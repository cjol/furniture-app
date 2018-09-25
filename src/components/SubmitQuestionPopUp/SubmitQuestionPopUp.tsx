import { Popup } from "Components/Popup/Popup";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";

import { TextField } from "./TextField/TextField";

export class SubmitQuestionPopUp extends React.PureComponent<{}> {
  static defaultProps: SubmitQuestionPopUp["props"] = {};

  render() {
    return (
      <Popup>
        <TextField />
        <RectangularButton>SUBMIT QUERY</RectangularButton>
      </Popup>
    );
  }
}
