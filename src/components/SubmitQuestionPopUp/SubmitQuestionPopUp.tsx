import * as React from "react";
import { Placeholder } from "Components/Placeholder";

export class SubmitQuestionPopUp extends React.PureComponent<{}> {
  static defaultProps: SubmitQuestionPopUp["props"] = {};

  render() {
    return (
      <Placeholder description="SubmitQuestion" orientation="column">
        <Placeholder description="x" />
        <Placeholder description="Have A Question" />
        <Placeholder description="SubmitQuery" />
      </Placeholder>
    );
  }
}
