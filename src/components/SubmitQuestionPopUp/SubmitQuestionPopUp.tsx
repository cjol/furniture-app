import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Close } from "@material-ui/icons";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import { TextField } from "./TextField/TextField";
import { Header } from "./Header/Header";

export class SubmitQuestionPopUp extends React.PureComponent<{}> {
  static defaultProps: SubmitQuestionPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="SubmitQuestionPage" orientation="column">
        <Header />
        <TextField />
        <RectangularButton>SUBMIT QUERY</RectangularButton>
      </Placeholder>
    );
  }
}
