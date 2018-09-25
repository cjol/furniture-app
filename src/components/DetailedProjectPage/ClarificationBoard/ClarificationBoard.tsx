import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Question1 } from "./Question1/Question1";
import { Question2 } from "./Question2/Question2";
import { QuestionMore } from "./QuestionMore/QuestionMore";

export class ClarificationBoard extends React.PureComponent<{}> {
  static defaultProps: ClarificationBoard["props"] = {};

  render() {
    return (
      <Placeholder description="ClarificationBoard" orientation="column">
        <Placeholder description="ClarificationBoardTitle" />
        <Question1 />
        <Question2 />
        <QuestionMore />
      </Placeholder>
    );
  }
}
