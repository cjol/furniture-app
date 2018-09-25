import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Question } from "./Question/Question";
import { QuestionAdd } from "./QuestionAdd/QuestionAdd";
import { Subheading } from "Components/Subheading/Subheading";

export class ClarificationBoard extends React.PureComponent<{}> {
  static defaultProps: ClarificationBoard["props"] = {};

  render() {
    return (
      <Placeholder description="ClarificationBoard" orientation="column">
        <Subheading />
        <Question />
        <Question />
        <QuestionAdd />
      </Placeholder>
    );
  }
}
