import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";

export class SubmitQuestionPopUp extends React.PureComponent<{}> {
  static defaultProps: SubmitQuestionPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="SubmitQuestionPage" orientation="column">
        <Placeholder description="header" orientation="row">
          <Placeholder description="Have A Question" />
          <Close />
        </Placeholder>
        <Placeholder description="Textfield" />
        <RectangularButton>SUBMIT QUERY</RectangularButton>
      </Placeholder>
    );
  }
}
