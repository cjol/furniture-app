import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Question } from "./Question/Question";
import { QuestionAdd } from "./QuestionAdd/QuestionAdd";

export class ClarificationBoard extends React.PureComponent<{}> {
  static defaultProps: ClarificationBoard["props"] = {};

  render() {
    return (
      <Placeholder description="ClarificationBoard" orientation="column">
        <Placeholder description="ClarificationBoardTitle" />
        <Question />
        <Question />
        <QuestionAdd />
      </Placeholder>
    );
  }
}
