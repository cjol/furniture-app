import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class SubmitQuestionPopUp extends React.PureComponent<{}> {
  static defaultProps: SubmitQuestionPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="SubmitQuestionPage" orientation="row">
        <Placeholder description="header" orientation="row">
          <Placeholder description="Have A Question" />
          <Placeholder description="x" />
        </Placeholder>
        <Placeholder description="Textfield" />
        <Placeholder description="SubmitQuery" />
      </Placeholder>
    );
  }
}
